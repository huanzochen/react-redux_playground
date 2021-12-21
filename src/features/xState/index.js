import Light from "./light/light";

import styles from "./xState.module.scss";

const XState = () => {
  return (
    <>
      <h1> XState</h1>
      <div className={styles.gallery}>
        <Light />
      </div>
    </>
  );
};

export default XState;
