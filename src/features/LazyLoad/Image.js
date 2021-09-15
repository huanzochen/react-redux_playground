import { useState, useRef } from 'react'

import classnames from 'classnames'
import { useIntersection } from './IntersectionObserver'
import {
  StyledImage,
  Mockup,
  Mockup2,
  Img
} from './StyleImage'

function Image({ 
  id,
  src,
  height,
  width
}) {
  const [isInView, setIsInView] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  const imgRef = useRef()
  useIntersection(imgRef, () => {
    setIsInView(true)
  })

  const handleOnload = (e) => {
    // 該圖片收到 onLoad Event === 載入完畢
    console.log('載入完畢')
    setIsLoad(true)
  }

  return (
    <StyledImage
      width={width} 
      height={height} 
      ref={imgRef}
    >

      <Mockup className={classnames({ 'loading': !isLoad })}/>

      {isInView &&
       <Img
         src={src}
         onLoad={handleOnload}
         className={classnames({ 'isload': isLoad })}
       />
      }
    </StyledImage>
  )
}


export default Image