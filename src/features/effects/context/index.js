import { createContext, useContext } from 'react'
import EffectsProvider from './provider'

const EffectsContext = createContext()

const useEffectsCtx = () => {
  const contextValue = useContext(EffectsContext)

  if (process.env.NODE_ENV !== 'production' && !contextValue) {
    console.error('Please use useEffectCtx() in Effects provider')
  }

  return contextValue
}

export { useEffectsCtx, EffectsProvider }
export default EffectsContext
