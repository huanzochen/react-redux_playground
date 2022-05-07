import { useState } from 'react'
import EffectsContext from './'

const EffectsProvider = ({ children }) => {
  const [test, setTest] = useState('')

  console.log(
    'When the context re-render, it should display one or two? \n',
    'In this example, I predict that One component & Two component has shared the life cycle in React Hook.\n',
    'provider: test:',
    test
  )

  const getContextValue = () => {
    return {
      test,
      setTest,
    }
  }

  return <EffectsContext.Provider value={getContextValue()}>{children}</EffectsContext.Provider>
}

export default EffectsProvider
