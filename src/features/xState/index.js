import { interpret } from "xstate";
import { inspect } from "@xstate/inspect";

import { createMachine } from "xstate";

const lightMachine = createMachine({
  id: "light",
  initial: "green",
  states: {
    green: {
      on: {
        CLICK: "yellow",
      },
    },
    yellow: {
      on: {
        CLICK: "red",
      },
    },
    red: {
      on: {
        CLICK: "green",
      },
    },
  },
});

const XState = () => {
  const state0 = lightMachine.initialState;
  console.log(state0);
  const state1 = lightMachine.transition(state0, "CLICK");
  console.log(state1);
  const state2 = lightMachine.transition(state1, "CLICK");
  console.log(state2);
  const state3 = lightMachine.transition(state2, "CLICK");
  console.log(state3);

  const service = interpret(lightMachine, { devtools: true });

  return (
    <>
      <h1> XState</h1>
    </>
  );
};

export default XState;
