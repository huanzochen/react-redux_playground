import { useEffect, useState } from "react";
import { useMachine } from "@xstate/react";
import counterMachine, { COUNTER_EVENTS } from "./counterMachine";

import styles from "./counter.module.scss";

const Counter = () => {
  const [counter, sendCounter] = useMachine(counterMachine, {
    devtools: true,
  });

  const [count, setCount] = useState(counter.context.count);

  console.log("counter", counter);

  const handleCountOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    setCount(e.target.value);
  };

  const handleAddOne = () => {
    console.log("handleAddOne");
    sendCounter(COUNTER_EVENTS.INCREMENT);
  };

  const handleAddCustom = () => {
    console.log("handleAddCustom");
    sendCounter({
      type: COUNTER_EVENTS.DYNAMIC_INCREMENT,
      value: Number(count),
    });
  };

  const handleReset = () => {
    console.log("handleReset");
    sendCounter(COUNTER_EVENTS.RESET);
  };

  const handleDisable = () => {
    console.log("handleDisable");
    sendCounter(COUNTER_EVENTS.DISABLE);
  };

  const handleEnable = () => {
    console.log("handleEnable");
    sendCounter(COUNTER_EVENTS.ENABLE);
  };

  useEffect(() => {
    setCount(counter.context.count);
  }, [counter.context.count]);

  return (
    <div className={styles.container}>
      <span>counter</span>
      <div className={styles.counterSection}>
        <input value={count} onChange={handleCountOnchange} type="number" />
        {counter.context.count}
        <button onClick={handleAddOne}> add 1 </button>
        <button onClick={handleAddCustom}> add custom </button>
        <button onClick={handleReset}> reset </button>
        <button onClick={handleDisable}> Disable </button>
        <button onClick={handleEnable}> Enable </button>
      </div>
    </div>
  );
};

export default Counter;
