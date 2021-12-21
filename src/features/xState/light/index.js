import { interpret } from "xstate";
import { inspect } from "@xstate/inspect";
import { useMachine } from "@xstate/react";

import cx from "classnames";

import lightMachine, { LIGHT_STATES, LIGHT_EVENTS } from "./lightMachine";

import styles from "./light.module.scss";

const Light = () => {
  // const state0 = lightMachine.initialState;
  // console.log(state0);
  // const state1 = lightMachine.transition(state0, "CLICK");
  // console.log(state1);
  // const state2 = lightMachine.transition(state1, "CLICK");
  // console.log(state2);
  // const state3 = lightMachine.transition(state2, "CLICK");
  // console.log(state3);

  // const stateBroken = lightMachine.transition(state0, "BROKEN");
  // console.log(stateBroken);

  // console.log("state0.nextEvents:", state0.nextEvents);
  // console.log("state1.nextEvents:", state1.nextEvents);
  // console.log("stateBroken.nextEvents:", stateBroken.nextEvents);

  // // matches  可以看到目前 state 狀況， 返回 Boolean
  // console.log('state1.matches("yellow"):', state1.matches("yellow"));
  // console.log(state2.matches("red"));
  // console.log(state3.matches("green"));
  // console.log('stateBroken.matches("black"):', stateBroken.matches("black"));

  const [light, sendLight] = useMachine(lightMachine, { devtools: true });
  console.log("light:", light);
  // console.log("light.context", light.context);
  // console.log("light.value:", light.value);

  const handleOnClick = () => {
    sendLight(LIGHT_EVENTS.CLICK);
  };

  const handleOnBroken = () => {
    sendLight(LIGHT_EVENTS.BROKEN);
  };

  const handleOnFix = () => {
    sendLight(LIGHT_EVENTS.FIX);
  };

  return (
    <div className={styles.container}>
      <span>light</span>
      <div className={styles.lightSection}>
        <div className={styles.light}>
          {light.matches(LIGHT_STATES.RED) && (
            <div className={cx(styles.red)} />
          )}
          {light.matches(LIGHT_STATES.GREEN) && (
            <div className={cx(styles.green)} />
          )}
          {light.matches(LIGHT_STATES.YELLOW) && (
            <div className={cx(styles.yellow)} />
          )}
          {light.matches(LIGHT_STATES.BLACK) && (
            <div className={cx(styles.black)} />
          )}
        </div>
        <button onClick={handleOnClick}>CLICK!</button>
        <button onClick={handleOnBroken}>BROKEN!</button>
        <button onClick={handleOnFix}>FIX!</button>
      </div>
    </div>
  );
};

export default Light;
