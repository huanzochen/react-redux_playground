import { useEffect, useState, useCallback, useRef } from 'react'
import { throttle } from 'lodash'
import useCanvasCtx from './context'
import Canvas from './canvas'

import styles from './canvasInReact.module.scss'

const MainPage = () => {
  const { canvasContainerRef } = useCanvasCtx()

  const mouseRef = useRef({ x: null, y: null })

  const canvasMouseMove = useCallback(
    throttle((e) => {
      mouseRef.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    }, 200),
    []
  )

  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(1)
    console.log(
      'initialize the canvas... using this to let this page re-render oneTime to get canvasContainerRef.current'
    )
  }, [])

  return (
    <div>
      <h1>canvas in React</h1>
      <div
        ref={canvasContainerRef}
        className={styles.canvasContainer}
        onMouseMove={canvasMouseMove}
      >
        {canvasContainerRef.current && (
          <Canvas
            mouseRef={mouseRef}
            width={canvasContainerRef.current.clientWidth}
            height={canvasContainerRef.current.clientHeight}
          />
        )}
      </div>
    </div>
  )
}

export default MainPage
