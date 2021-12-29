import CounterUseInterpret from "./counterUseInterpret";
import Counter from "./counter";
import Light from "./light";

import styles from "./xState.module.scss";

const XState = () => {
  return (
    <>
      <h1> XState</h1>
      <div className={styles.gallery}>
        <CounterUseInterpret />
        <Counter />
        <Light />
      </div>
    </>
  );
};

export default XState;
