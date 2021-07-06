import React, { useState, useEffect } from 'react'



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

  // 被綁定 ref 的該原生 DOM 是否已經觸底.
  function isBottom(ref) { 
    if (!ref.current) {
      return false
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight
  }

  useEffect(() => {
    const onScroll = () => {
      if (hasMore && isBottom(refDiv)) {
        console.log('正在仔入內容...')
        next()
        setIsLoading(true)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  useEffect(() => {
    if (checkDataLenth !== dataLength) {
      console.log('資料長度變了')
      setCheckDataLenth(dataLength)
      setIsLoading(false)
    }
  }, [checkDataLenth, dataLength])



  return (
    <div ref={refDiv} style={{ overflowAnchor: 'none' }}>
      {children}
    </div>
  )

}

export default InfiniteScroll