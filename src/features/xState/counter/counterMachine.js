import { createMachine, withContext, assign } from "xstate";

export const COUNTER_EVENTS = {
  INCREMENT: "INCREMENT",
  DYNAMIC_INCREMENT: "DYNAMIC_INCREMENT",
  RESET: "RESET",
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
};

const counterMachine = createMachine(
  {
    id: "counter",
    initial: "ENABLED",
    context: {
      count: 1,
    },
    states: {
      ENABLED: {
        on: {
          [COUNTER_EVENTS.INCREMENT]: {
            actions: ["increment"],
          },
          [COUNTER_EVENTS.DYNAMIC_INCREMENT]: {
            actions: ["dynamic_increment"],
          },
          [COUNTER_EVENTS.RESET]: {
            actions: ["reset"],
          },
          [COUNTER_EVENTS.DISABLE]: {
            target: "DISABLED",
          },
        },
      },
      DISABLED: {
        on: {
          [COUNTER_EVENTS.ENABLE]: "ENABLED",
        },
      },
    },
  },
  {
    actions: {
      increment: assign((context, event) => {
        return {
          count: context.count + 1,
        };
      }),
      dynamic_increment: assign({
        count: (context, event) => context.count + (event.value || 0),
      }),
      reset: assign(() => {
        return {
          count: 1,
        };
      }),
    },
  }
);

export default counterMachine;
