import styled from 'styled-components'


const StyledHome = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

& > a{
    padding-right: 10px
}
`

function Home () {
  return (
    <StyledHome>
      <a href="/">Home</a>
      <a href="/mouseevents">MouseEvents</a>
      <a href="/infinitescroll">InfiniteScroll</a>
      <a href="/github">GitHub</a>
      <a href="/eventtargetvalue">EventTargetValue</a>
      <a href="/counter">Counter</a>
      <a href="/mycounter">MyCounter</a>
    </StyledHome>
  )
}


export default Home