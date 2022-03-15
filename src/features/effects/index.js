import EffectsWrapper from './effectsWrapper'

import One from './one'
import Two from './two'

const Effects = () => {
  return (
    <>
      <EffectsWrapper>
        <span>Look at console.log() to observe the change with</span>
        <h3>test</h3>
        <span>state value in provider.</span>
        <One />
        <Two />
      </EffectsWrapper>
    </>
  )
}

export default Effects
