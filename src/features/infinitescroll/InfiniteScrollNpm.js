import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
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
 * 這個範例使用了 react-infinite-scroll-component 套件, 看看人家是怎麼做的
 */


function InfiniteScrollNpm() {
  const dispatch = useDispatch()
  const [hasMoreData, setHasMoreData] = useState(false)
  const fakeDataStatus = useSelector(state => state.infinitescrolls.status)
  const dataIds = useSelector(selectDataIds)
  const pagination = useSelector(state => state.infinitescrolls.pagination)
  const dataIdsPart = useSelector((state) => selectDataIdsPart(state, pagination))

  const fetchMoreData = () => {
    dispatch(nextPage())
  }

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
  
  useEffect(() => {
    if (dataIds.length > dataIdsPart.length) {
      setHasMoreData(true)
    }
    else {
      setHasMoreData(false)
    }
  }, [dataIds.length, dataIdsPart.length])

  useEffect(() => {
    function initial() {
      if (fakeDataStatus === 'idle') {
        dispatch(getFakeData())
      }
    }
    initial()
  })

  return (
    <div>
      infinite-scroll-demo
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

export default InfiniteScrollNpm
