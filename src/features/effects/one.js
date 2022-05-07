import { useEffect } from 'react'
import { useEffectsCtx } from './context'

const One = () => {
  const {
    //  test,
    setTest,
  } = useEffectsCtx()

  useEffect(() => {
    console.log('One first render')
    setTest('one')
    // eslint-disable-next-line
  }, [])

  return <div> One Element</div>
}

export default One
