import { useState } from 'react'
import EffectsContext from './'

const EffectsProvider = ({ children }) => {
  const [test, setTest] = useState('')

  console.log('provider: test:', test)

  const getContextValue = () => {
    return {
      test,
      setTest,
    }
  }

  return <EffectsContext.Provider value={getContextValue()}>{children}</EffectsContext.Provider>
}

export default EffectsProvider
