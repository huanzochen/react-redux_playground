import styled from 'styled-components'

export const StyledImage = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 20px auto;
  padding-bottom: ${(props) => (props.height / props.width) * 100}%;
  width: 100%;
  background-color: #ccc;
`

export const Mockup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: linear-gradient(90deg, #e66465c1, #e66465d1, #9198e5e1, #e66465e1, #e66465f1);
  background-size: 400% 200%;
  background-repeat: repeat;

  @keyframes loading {
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  &.loading {
    animation-name: loading;
    animation-timing-function: ease;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: contain;

  transition: opacity 1.2s ease;

  &.isload {
    opacity: 1;
  }
`
