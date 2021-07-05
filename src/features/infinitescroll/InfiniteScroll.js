import { BrowserRouter as Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import ScrollEvent from './ScrollEvent'
import HandMadeInfiniteScroll from './HandMadeInfiniteScroll'
import InfiniteScrollNpm from './InfiniteScrollNpm'


/**
 * 
 * @returns 
 * 
 * 這個範例演示了 infinite scroll 
 * 參考至 https://typeofnan.dev/creating-a-react-infinite-scroll-component/
 * 利用在 div (原生地 DOM) 宣告 ref 來抓取元素的個別數值, 取得他的 bottom 來實作偵測元素底部實現 無限捲動載入的功能.
 */

function InfiniteScroll() {
  let { path, url } = useRouteMatch()

  return (
    <div>
      <a href={`${url}/origin`}> ScrollEvent </a>
      <a href={`${url}/handmade`}> HandMadeInfiniteScroll </a>
      <a href={`${url}/infinite-scroll-npm`}> InfiniteScrollNpm</a>
      <Switch>
        <Route exact path={`${path}/origin`}>
          <ScrollEvent></ScrollEvent>
        </Route>
        <Route exact path={`${path}/handmade`}>
          <HandMadeInfiniteScroll></HandMadeInfiniteScroll>
        </Route>
        <Route exact path={`${path}/infinite-scroll-npm`}>
          <InfiniteScrollNpm></InfiniteScrollNpm>
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