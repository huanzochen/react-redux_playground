import React, { useState, useEffect, useRef } from 'react'
import { nanoid, unwrapResult } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import { getFakeData, selectDataIds } from './infinitescrollSlice'

/**
 * 
 * @returns 
 * 
 * 這個範例演示了 infinite scroll 
 * 參考至 https://typeofnan.dev/creating-a-react-infinite-scroll-component/
 * 利用在 div (原生地 DOM) 宣告 ref 來抓取元素的個別數值, 取得他的 bottom 來實作偵測元素底部實現 無限捲動載入的功能.
 */

function Reduxx() {
  const refDiv = React.useRef()
  const dispatch = useDispatch()
  const DataIds = useSelector(selectDataIds)
  const fakeDataStatus = useSelector(state => state.infinitescrolls.status)

  // 被綁定 ref 的該原生 DOM 是否已經觸底.
  function isBottom(ref) { 
    if (!ref.current) {
      return false
    }
    // console.log(`ref.current.getBoundingClientRect().bottom=${ref.current.getBoundingClientRect().bottom}`)
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight
  }

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (!isLoading && isBottom(refDiv)) {
  //       console.log('正在仔入內容...')
  //     }
  //   }
  //   // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
  //   window.addEventListener('scroll', onScroll)
  //   return () => document.removeEventListener('scroll', onScroll)
  // })

  useEffect(() => {
    async function initial() {
      if (fakeDataStatus === 'idle') {
        const result = await dispatch(getFakeData())
        console.log(unwrapResult(result))
      }
    }
    initial()
  })

  let content 
  content = DataIds.map((data) => {
    return <div key={nanoid()}>{data}</div>
  })

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