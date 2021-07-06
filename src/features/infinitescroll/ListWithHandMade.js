import React, { useState, useEffect, useRef } from 'react'
import { nanoid, unwrapResult } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from './InfiniteScroll'

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

function HandMadeInfiniteScroll() {
  const dispatch = useDispatch()
  const [hasMoreData, setHasMoreData] = useState(false)
  const fakeDataStatus = useSelector(state => state.infinitescrolls.status)
  const dataIds = useSelector(selectDataIds)
  const pagination = useSelector(state => state.infinitescrolls.pagination)
  const dataIdsPart = useSelector((state) => selectDataIdsPart(state, pagination))

  const fetchMoreData = async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
    await promise
    dispatch(nextPage())
  }

  let Repo = ({ dataId }) => {
    const data = useSelector(state => selectDataById(state, dataId))
    return (
      <div>
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.full_name}</div>
        <div>{data.owner.repos_url}</div>
      </div>
    )
  }
  
  useEffect(() => {
    if (dataIds.length > dataIdsPart.length) {
      setHasMoreData(true)
    }
    else {
      setHasMoreData(false)
    }
  }, [dataIds.length, dataIdsPart.length])

  useEffect(() => {
    async function initial() {
      if (fakeDataStatus === 'idle') {
        dispatch(getFakeData())
      }
    }
    initial()
  })

  return (
    <div>
      infinite-scroll-handmade
      <InfiniteScroll
        dataLength={dataIdsPart.length}
        next={fetchMoreData}
        hasMore={hasMoreData}
        loader={<h4>Loading...</h4>}
      >
        {dataIdsPart.map((dataId, index) => {
          return (
            <Repo key={index} dataId={dataId}></Repo>
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default HandMadeInfiniteScroll

/**
 * https://developer.mozilla.org/zh-TW/docs/Web/API/Document/scroll_event
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * 
 * 
 */