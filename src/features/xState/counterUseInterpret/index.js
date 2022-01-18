import { useEffect, useState } from 'react'
import { useInterpret, useSelector, useActor, useMachine } from '@xstate/react'
import counterMachine, { COUNTER_EVENTS, COUNTER_STATES } from '../counter/counterMachine'

import cx from 'classnames'

import styles from '../counter/counter.module.scss'

const selectCount = (state) => state.context.count // 透過 selector 回傳一個 count
const selectContext = (state) => state.context // 回傳整個 context 的 selector

const CounterUseInterpret = () => {
  // const [counter, sendCounter] = useMachine(counterMachine, {
  //   devtools: true,
  // });

  const service = useInterpret(
    counterMachine,
    {
      devTools: false,
    },
    (state) => {
      // observerble function 目前還不知道用途為何
      // 有跟 steven 聊到這個，他覺得應該是特定 state 的情況下會用到，我同意
      // console.log("observerable function fired! 還不清楚者東西能幹嘛");
    }
  )

  const [counterState, sendCounter] = useActor(service)

  const countContext = useSelector(service, selectCount) // 透過 selector 回傳一個 count
  const allContext = useSelector(service, selectContext) // 透過 selector 回傳整個 context

  console.log('selectCount countContext', countContext)
  console.log('counterState:', counterState)

  const [count, setCount] = useState(0)

  const isDISABLED = counterState.matches(COUNTER_STATES.counter.disabled)
  console.log('isDISABLED:', isDISABLED)

  const handleCountOnchange = (e) => {
    setCount(e.target.value)
  }
  const handleAddOne = () => {
    sendCounter(COUNTER_EVENTS.INCREMENT)
  }
  const handleAddCustom = () => {
    sendCounter({
      type: COUNTER_EVENTS.DYNAMIC_INCREMENT,
      value: Number(count),
    })
  }
  const handleReset = () => {
    // console.log("handleReset");
    sendCounter(COUNTER_EVENTS.RESET)
  }
  const handleDisable = () => {
    // console.log("handleDisable");
    sendCounter(COUNTER_EVENTS.DISABLE)
  }
  const handleEnable = () => {
    // console.log("handleEnable");
    sendCounter(COUNTER_EVENTS.ENABLE)
  }

  useEffect(() => {
    setCount(0)
  }, [countContext])

  return (
    <div className={styles.container}>
      <span>Counter UseInterpret</span>
      <div className={cx(styles.counterSection, { [styles.grey]: isDISABLED })}>
        <input value={count} onChange={handleCountOnchange} type="number" />
        {countContext}
        <button onClick={handleAddOne}> add 1 </button>
        <button onClick={handleAddCustom}> add custom </button>
        <button onClick={handleReset}> reset </button>
      </div>
      <button onClick={handleDisable}> Disable </button>
      <button onClick={handleEnable}> Enable </button>
      <div>
        <span>如果 按鈕已經 disable, 那就不能進行加減等的動作．</span>
      </div>
    </div>
  )
}

export default CounterUseInterpret
