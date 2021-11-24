import React from "react";
import { StyledHome, DynamicPage, StaticPage } from "./StyleHome";

function Home() {
  return (
    <StyledHome>
      <DynamicPage>
        <div>Dynamic Page</div>
        <a href="/">Home</a>
        <a href="/cookie">Cookie</a>
        <a href="/mouseevents">MouseEvents</a>
        <a href="/infinitescroll">InfiniteScroll</a>
        <a href="/github">GitHub</a>
        <a href="/eventtargetvalue">EventTargetValue</a>
        <a href="/counter">Counter</a>
        <a href="/mycounter">MyCounter</a>
        <a href="/lazyload">LazyLoad</a>
        <a href="/hoc">Hoc</a>
        <a href="/context">Context</a>
        <a href="/contexthk">ContextWithHook</a>
        <a href="/multicontext">MultiContext</a>
        <a href="/reducercounter">ReducerCounter</a>
        <a href="/itempage">ItemPagePC</a>
        <a href="/apollo_playground">ApolloPlayground</a>
      </DynamicPage>
      <StaticPage>
        <div>Static Page</div>
        <a href="/handmade_grid_system/gridsystem.html">gridsystem</a>
        <a href="/debounce_throttle/debounce_throttle.html">
          debounce&throttle
        </a>
        <a href="/layout_containingblock/layout_containingblock.html">
          layout_containingblock
        </a>
        <a href="/position/position-relative.html">relative</a>
        <a href="/position/position-absolute.html">absolute</a>
        <a href="/position/position-fixed.html">fixed</a>
        <a href="/position/position-sticky.html">sticky</a>
        <a href="/lazy-loading/intersection-observer.html">
          intersection-observer
        </a>
        <a href="/lazy-loading/intersection-observer2.html">
          intersection-observer2
        </a>
        <a href="/landing_page_50+54/">landing_page</a>
        <a href="/div3wayscenter/div3wayscenter1.html">div3wayscenter1</a>
        <a href="/div3wayscenter/div3wayscenter2.html">div3wayscenter2</a>
        <a href="/div3wayscenter/div3wayscenter3.html">div3wayscenter3</a>
        <a href="/div3wayscenter/div3wayscenter4.html">div3wayscenter4</a>
      </StaticPage>
    </StyledHome>
  );
}

export default Home;
