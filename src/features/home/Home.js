import styled from 'styled-components'
import { color } from '../../utils/color'


const StyledHome = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

& > a{
    padding-right: 10px
}
`

const DynamicPage = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
background: ${color.primary};
border-radius: 10px;
`

const StaticPage = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
font-size: 20px;
background: ${color.third};

& > a{
  margin: 0 5px 0 5px;
}
`


function Home() {
  return (
    <StyledHome>
      <DynamicPage>
        <a href="/">Home</a>
        <a href="/cookie">Cookie</a>
        <a href="/mouseevents">MouseEvents</a>
        <a href="/infinitescroll">InfiniteScroll</a>
        <a href="/github">GitHub</a>
        <a href="/eventtargetvalue">EventTargetValue</a>
        <a href="/counter">Counter</a>
        <a href="/mycounter">MyCounter</a>
        <a href="/lazyload">LazyLoad</a>
      </DynamicPage>
      <StaticPage>
        <a href="/handmade_grid_system/gridsystem.html">gridsystem</a>
        <a href="/debounce_throttle/debounce_throttle.html">debounce&throttle</a>
      </StaticPage>
      <StaticPage>
        <a href="/layout_containingblock/layout_containingblock.html"> layout_containingblock </a>
        <a href="/position/position-relative.html">relative</a>
        <a href="/position/position-absolute.html">absolute</a>
        <a href="/position/position-fixed.html">fixed</a>
        <a href="/position/position-sticky.html">sticky</a>
      </StaticPage>
      <StaticPage>
        <a href="/lazy-loading/intersection-observer.html">intersection-observer</a>
        <a href="/lazy-loading/intersection-observer2.html">intersection-observer2</a>
      </StaticPage>
      <StaticPage>
        <a href="/landing_page_50+54/">landing_page</a>
      </StaticPage>
      <StaticPage>
        <a href="/div3wayscenter/div3wayscenter1.html">div3wayscenter1</a>
      </StaticPage>
    </StyledHome>
  )
}


export default Home