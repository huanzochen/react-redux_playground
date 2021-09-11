import styled from 'styled-components'


const StyledHome = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

& > a{
    padding-right: 10px
}
`

const StaticPage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

& > a{
  margin: 0 5px 0 5px;
}

`


function Home () {
  return (
    <StyledHome>
      <a href="/">Home</a>
      <a href="/cookie">Cookie</a>
      <a href="/mouseevents">MouseEvents</a>
      <a href="/infinitescroll">InfiniteScroll</a>
      <a href="/github">GitHub</a>
      <a href="/eventtargetvalue">EventTargetValue</a>
      <a href="/counter">Counter</a>
      <a href="/mycounter">MyCounter</a>
      <StaticPage>
        <a href="/handmade_grid_system/gridsystem.html">gridsystem</a>
        <a href="/debounce_throttle/debounce_throttle.html">debounce&throttle</a>
      </StaticPage>
      <StaticPage>
        <a href="/position/position-relative.html">relative</a>
        <a href="/position/position-absolute.html">absolute</a>
        <a href="/position/position-fixed.html">fixed</a>
        <a href="/position/position-sticky.html">sticky</a>
      </StaticPage>
    </StyledHome>
  )
}


export default Home