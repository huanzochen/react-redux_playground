import { useEffect, useState } from 'react'
import useCanvasCtx from './context'
import Canvas from './canvas'

import styles from './canvasInReact.module.scss'

const MainPage = () => {
  const { canvasContainerRef } = useCanvasCtx()

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
    console.log(
      'initialize the canvas... using this to let this page re-render oneTime to get canvasContainerRef.current'
    )
  }, [])

  if (canvasContainerRef.current) console.log(canvasContainerRef.current)

  return (
    <div>
      <h1>canvas in React</h1>
      <div ref={canvasContainerRef} className={styles.canvasContainer}>
        {canvasContainerRef.current && (
          <Canvas
            width={canvasContainerRef.current.clientWidth}
            height={canvasContainerRef.current.clientHeight}
          />
        )}
      </div>
    </div>
  )
}

export default MainPage
