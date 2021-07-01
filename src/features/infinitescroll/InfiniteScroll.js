import { BrowserRouter as Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import InfiniteScrollOrigin from './Origin'


/**
 * 
 * @returns 
 * 
 * 這個範例演示了 infinite scroll 
 * 參考至 https://typeofnan.dev/creating-a-react-infinite-scroll-component/
 * 利用在 div (原生地 DOM) 宣告 ref 來抓取元素的個別數值, 取得他的 bottom 來實作偵測元素底部實現 無限捲動載入的功能.
 */

function InfiniteScroll() {
  let match = useRouteMatch()
  console.log(match)

  return (
    <div>
      <Link to={`${match.url}/origin`}>Origin</Link>
      <a href="/ifinitescroll/origin"> A</a>

      <Switch>
        <Route path={`${match.path}/origin`}>
          <InfiniteScrollOrigin></InfiniteScrollOrigin>
        </Route>

      </Switch>
    </div>
  )
}

export default InfiniteScroll

/**
 * https://developer.mozilla.org/zh-TW/docs/Web/API/Document/scroll_event
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * 
 * 
 */