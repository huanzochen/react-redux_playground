import { useEffect } from 'react'
import { useEffectsCtx } from './context'

const Two = () => {
  const { test, setTest } = useEffectsCtx()

  useEffect(() => {
    console.log('Two first render')
    setTest('two')
  }, [])

  return <div> Two Element</div>
}

export default Two
