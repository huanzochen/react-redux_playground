import React, { useState, useEffect, useRef } from 'react'
import { nanoid, unwrapResult } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import { 
  getFakeData, 
  selectDataIds, 
  selectDataIdsPart,
  selectDataById,
  nextPage
} from './infinitescrollSlice'

/**
 * 
 * @returns 
 * 
 * 這個範例演示了 infinite scroll 
 * 參考至 https://typeofnan.dev/creating-a-react-infinite-scroll-component/
 * 利用在 div (原生地 DOM) 宣告 ref 來抓取元素的個別數值, 取得他的 bottom 來實作偵測元素底部實現 無限捲動載入的功能.
 */

let Repo = ({ dataId }) => {
  const data = useSelector(state => selectDataById(state, dataId))
  return (
    <div>
      <div>{data.id}</div>
      <div>{data.name}</div>
      <div>{data.full_name}</div>
    </div>
  )
}

function Reduxx() {
  const refDiv = React.useRef()
  const dispatch = useDispatch()
  const fakeDataStatus = useSelector(state => state.infinitescrolls.status)
  const dataIds = useSelector(selectDataIds)
  const pagination = useSelector(state => state.infinitescrolls.pagination)
  const dataIdsPart = useSelector((state) => selectDataIdsPart(state, pagination))

  const [hasMoreData, setHasMoreData] = useState(false)
  

  useEffect(() => {
    console.log(dataIds.length, dataIdsPart.length)
    if (dataIds.length > dataIdsPart.length) {
      setHasMoreData(true)
    }
    else {
      setHasMoreData(false)
    }
  }, [dataIds.length, dataIdsPart.length])

  // 被綁定 ref 的該原生 DOM 是否已經觸底.
  function isBottom(ref) { 
    if (!ref.current) {
      return false
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight
  }

  useEffect(() => {
    const onScroll = () => {
      if (fakeDataStatus === 'succeeded' && hasMoreData && isBottom(refDiv)) {
        console.log('正在仔入內容...')
        dispatch(nextPage())
      }
    }
    // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [fakeDataStatus, hasMoreData, dispatch])

  useEffect(() => {
    async function initial() {
      if (fakeDataStatus === 'idle') {
        const result = await dispatch(getFakeData())
      }
    }
    initial()
  })

  let content 
  if (fakeDataStatus === 'loading') {
    content = <div> loading </div>
  }
  else if (fakeDataStatus === 'succeeded') {
    content = dataIdsPart.map(dataId => 
      <Repo key={dataId} dataId={dataId}></Repo>
    )
  }

  return (
    <div ref={refDiv}>
      {content}
    </div>
  )
}

export default Reduxx

/**
 * https://developer.mozilla.org/zh-TW/docs/Web/API/Document/scroll_event
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * 
 * 
 */