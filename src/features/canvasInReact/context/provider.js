import { useRef } from 'react'
import { CanvasContext } from './'

const CanvasProvider = ({ children }) => {
  const canvasContainerRef = useRef(null)

  const getContextValue = () => {
    return {
      canvasContainerRef,
    }
  }

  return <CanvasContext.Provider value={getContextValue()}>{children}</CanvasContext.Provider>
}

export default CanvasProvider
