import React, { useState, useEffect, useCallback, useMemo } from 'react'

function throttle(func, delay) {
  let timeout = null
  let inThrottle = false
  return function() {
    let context = this
    let args = arguments
    if (!inThrottle) {
      inThrottle = true
      func.apply(context, args)
      timeout = setTimeout(function() {
        inThrottle = false
      }, delay)
    }
  }
}

function InfiniteScroll({
  dataLength,
  next,
  hasMore,
  loader,
  children
}) {
  const refDiv = React.useRef()
  let [isLoading, setIsLoading] = useState(false)
  let [checkDataLenth, setCheckDataLenth] = useState(dataLength)

  const isBottom = (ref) => { 
    if (!ref.current) {
      return false
    }
    console.log(ref.current.getBoundingClientRect().bottom)
    return ref.current.getBoundingClientRect().bottom - 500 <= window.innerHeight
  }

  // 被綁定 ref 的該原生 DOM 是否已經觸底.

  const onScroll = useCallback((e) => {
    console.log('scrolling...')
    console.log(hasMore, isBottom(refDiv))
    // console.log(e)
    if (hasMore && isBottom(refDiv)) {
      console.log('正在仔入內容...')
      next()
      setIsLoading(true)
    }
  }, [hasMore, next])

  const throttleChangedHandler = useMemo(() => { return throttle(onScroll, 300) }
    , [onScroll])


  useEffect(() => {
    document.addEventListener('scroll', throttleChangedHandler)
    return () => document.removeEventListener('scroll', throttleChangedHandler)
  }, [next, checkDataLenth, dataLength, hasMore, throttleChangedHandler])

  useEffect(() => {
    if (checkDataLenth !== dataLength) {
      console.log('載入更多資料中...')
      setIsLoading(false)
      setCheckDataLenth(dataLength)
    }
  }, [checkDataLenth, dataLength])



  return (
    <div ref={refDiv}>
      {children}
      {isLoading ? loader : ''}
    </div>
  )

}

export default InfiniteScroll