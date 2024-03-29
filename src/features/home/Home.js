import React from 'react'
import { StyledHome, DynamicPage, StaticPage } from './StyleHome'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <StyledHome>
      <DynamicPage>
        <div>Dynamic Page</div>
        <Link to="/">Home</Link>
        <Link to="/cookie">Cookie</Link>
        <Link to="/mouseevents">MouseEvents</Link>
        <Link to="/infinitescroll">InfiniteScroll</Link>
        <Link to="/github">GitHub</Link>
        <Link to="/eventtargetvalue">EventTargetValue</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/mycounter">MyCounter</Link>
        <Link to="/lazyload">LazyLoad</Link>
        <Link to="/hoc">Hoc</Link>
        <Link to="/context">Context</Link>
        <Link to="/contexthk">ContextWithHook</Link>
        <Link to="/multicontext">MultiContext</Link>
        <Link to="/reducercounter">ReducerCounter</Link>
        <Link to="/itempage">ItemPagePC</Link>
        <Link to="/apollo_playground">ApolloPlayground</Link>
        <Link to="/add-on-list">AddOnList</Link>
        <Link to="/xstate">XState</Link>
        <Link to="/ellipsis">Ellipsis</Link>
        <Link to="/effects">Effects</Link>
        <Link to="/canvasInReact">Canvas-React</Link>
        <Link to="/canvasInReact-hook">Canvas-React(Hook)</Link>
        <Link to="/i_useref">useRef initial</Link>
      </DynamicPage>
      <StaticPage>
        <div>Static Page</div>
        <Link to="/handmade_grid_system/gridsystem.html">gridsystem</Link>
        <a href="/handmade_grid_system/gridsystem.html">gridsystem</a>
        <a href="/debounce_throttle/debounce_throttle.html">debounce&throttle</a>
        <a href="/layout_containingblock/layout_containingblock.html">layout_containingblock</a>
        <a href="/position/position-relative.html">relative</a>
        <a href="/position/position-absolute.html">absolute</a>
        <a href="/position/position-fixed.html">fixed</a>
        <a href="/position/position-sticky.html">sticky</a>
        <a href="/lazy-loading/intersection-observer.html">intersection-observer</a>
        <a href="/lazy-loading/intersection-observer2.html">intersection-observer2</a>
        <a href="/landing_page_50+54/">landing_page</a>
        <a href="/div3wayscenter/div3wayscenter1.html">div3wayscenter1</a>
        <a href="/div3wayscenter/div3wayscenter2.html">div3wayscenter2</a>
        <a href="/div3wayscenter/div3wayscenter3.html">div3wayscenter3</a>
        <a href="/div3wayscenter/div3wayscenter4.html">div3wayscenter4</a>
        <a href="/bubbling/bubbling.html">bubbling</a>
        <a href="/canvas/beginner/index.html">Canvas-beginner</a>
        <a href="/canvas/animations/index.html">Canvas-animations</a>
        <a href="/canvas/animations_2/index.html">Canvas-animations_2</a>
        <a href="/canvas/particles/index.html">Canvas-particles</a>
        <a href="/canvas/confetti_mine/index.html">Canvas-confetti_mine</a>
        <a href="/canvas/confetti_button/index.html">Canvas-confetti_button</a>
        <a href="/consistent_square/index.html">Consistent square</a>
        <a href="/consistent_square2/index.html">Consistent square2</a>
        <a href="/consistent_square3(2022)/index.html">Consistent square3(2022)</a>
        <a href="/css/overflow.html">overflow</a>
      </StaticPage>
    </StyledHome>
  )
}

export default Home
