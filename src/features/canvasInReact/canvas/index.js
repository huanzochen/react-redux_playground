import { useEffect, useRef } from 'react'
import { getRandomRangeNumber } from '../../../utils/common'
import { Circle } from './object'

const Canvas = (props) => {
  const { width, height } = props

  const canvasRef = useRef(null)

  let circleArray = []

  const init = () => {
    circleArray = []

    let dx = getRandomRangeNumber(-5, 5)
    let dy = getRandomRangeNumber(-5, 5)
    const radius = 20
    let x = getRandomRangeNumber(radius, width - radius)
    let y = getRandomRangeNumber(radius, height - radius)

    circleArray.push(new Circle(x, y, dx, dy, radius, width, height))
  }

  init()

  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas.getContext('2d')
    let animationFrameId = canvas.getAnimationFrame

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render)
      c.clearRect(0, 0, width, height)

      circleArray.forEach((current) => {
        current.update(c)
      })
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Canvas
