import styled from 'styled-components'

import { useState, useRef } from 'react'


const StyledImage = styled.div`
  background-color: #ccc;
  overflow: hidden;
  position: relative;
  max-width: 800px;
  margin: 20px auto;
  padding-bottom: ${props => props.height / props.width * 100}%;
`

function Image({ 
  id,
  src,
  height,
  width
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const imgRef = useRef(null)
  

  console.log(`${height / width * 100}%`)
  

  return (
    <StyledImage width={width} height={height}>

    </StyledImage>
  )
}


export default Image