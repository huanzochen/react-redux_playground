import { useEffect } from 'react'
import { useEffectsCtx } from './context'

const Two = () => {
  const {
    // test,
    setTest,
  } = useEffectsCtx()

  useEffect(() => {
    console.log('Two first render')
    setTest('two')

    // eslint-disable-next-line
  }, [])

  return <div> Two Element</div>
}

export default Two
