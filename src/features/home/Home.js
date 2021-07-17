import styled from 'styled-components'


const StyledHome = styled.div`
& > a{
    padding-right: 5px
}
`

function Home () {
  return (
    <StyledHome>
      <a href="/">Home</a>
      <a href="/infinitescroll">InfiniteScroll</a>
      <a href="/github">GitHub</a>
      <a href="/eventtargetvalue">EventTargetValue</a>
      <a href="/counter">Counter</a>
      <a href="/mycounter">MyCounter</a>
    </StyledHome>
  )
}


export default Home