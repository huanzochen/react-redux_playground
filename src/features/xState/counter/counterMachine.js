import { createMachine, withContext, assign } from 'xstate'

export const COUNTER_EVENTS = {
  INCREMENT: 'INCREMENT',
  DYNAMIC_INCREMENT: 'DYNAMIC_INCREMENT',
  RESET: 'RESET',
  DISABLE: 'DISABLE',
  ENABLE: 'ENABLE',
}

export const COUNTER_STATES = {
  root: 'counter',
  counter: {
    enabled: 'enabled',
    disabled: 'disabled',
  },
}

const counterMachine = createMachine(
  {
    id: 'counter',
    initial: COUNTER_STATES.counter.enabled,
    context: {
      count: 1,
    },
    // states: {
    // [COUNTER_STATES.root]: {
    // type: "parallel",
    states: {
      [COUNTER_STATES.counter.enabled]: {
        on: {
          [COUNTER_EVENTS.INCREMENT]: {
            actions: ['increment'],
          },
          [COUNTER_EVENTS.DYNAMIC_INCREMENT]: {
            actions: ['dynamic_increment'],
          },
          [COUNTER_EVENTS.RESET]: {
            actions: ['reset'],
          },
          [COUNTER_EVENTS.DISABLE]: {
            target: COUNTER_STATES.counter.disabled,
          },
        },
      },
      [COUNTER_STATES.counter.disabled]: {
        on: {
          [COUNTER_EVENTS.ENABLE]: COUNTER_STATES.counter.enabled,
        },
      },
    },
  },
  // },
  // },
  {
    actions: {
      increment: assign((context, event) => {
        return {
          count: context.count + 1,
        }
      }),
      dynamic_increment: assign({
        count: (context, event) => context.count + (event.value || 0),
      }),
      reset: assign(() => {
        return {
          count: 1,
        }
      }),
    },
  }
)

export default counterMachine
