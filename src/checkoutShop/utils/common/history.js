import { createBrowserHistory, createMemoryHistory } from 'history'

/**
 * Use the same reference of `$history` through multiple components,
 * and add listener on it ex: `$history.listen(() => {})`,
 * when browser history changes it'll notify all the subscribers.
 *
 * $history differs from window.history
 * please check https://github.com/ReactTraining/history#usage
 */

export const $history =
  typeof window === 'undefined'
    ? createMemoryHistory() // for SSR
    : createBrowserHistory() // for CSR
