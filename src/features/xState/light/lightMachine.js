import { createMachine, assign } from 'xstate'

export const LIGHT_STATES = {
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow',
  BLACK: 'black',
}

export const LIGHT_EVENTS = {
  CLICK: 'CLICK',
  BROKEN: 'BROKEN',
  FIX: 'FIX',
}

const lightMachine = createMachine(
  {
    id: 'light',
    initial: LIGHT_STATES.GREEN,
    states: {
      [LIGHT_STATES.GREEN]: {
        entry: ['entry_green'],
        exit: ['exit_green'],
        on: {
          [LIGHT_EVENTS.CLICK]: {
            target: LIGHT_STATES.YELLOW,
            actions: ['on_click'],
          },
          [LIGHT_EVENTS.BROKEN]: LIGHT_STATES.BLACK,
        },
      },
      [LIGHT_STATES.YELLOW]: {
        on: {
          [LIGHT_EVENTS.CLICK]: LIGHT_STATES.RED,
          [LIGHT_EVENTS.BROKEN]: LIGHT_STATES.BLACK,
        },
      },
      [LIGHT_STATES.RED]: {
        on: {
          [LIGHT_EVENTS.CLICK]: LIGHT_STATES.GREEN,
          [LIGHT_EVENTS.BROKEN]: LIGHT_STATES.BLACK,
        },
      },
      [LIGHT_STATES.BLACK]: {
        on: {
          [LIGHT_EVENTS.FIX]: LIGHT_STATES.GREEN,
        },
      },
    },
  },
  {
    actions: {
      entry_green: assign((context, event) => {
        console.log('entry_green context', context)
        console.log('entry_green event', event)
        return {
          name: 'kevin',
        }
      }),
      exit_green: assign((context, event) => {
        console.log('exit_green context', context)
        console.log('exit_green event', event)
        return {
          count: context.count + 1,
        }
      }),
      on_click: (context, event) => console.log('it is onClick! The event is: ', event),
    },
  }
)

const myMachine = lightMachine.withContext({
  count: 10,
  name: 'tommy',
})

export default myMachine
