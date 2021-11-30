import { bindAll } from "lodash";

export const bindAllValue = (self, args = []) => bindAll(self, ...args);

/**
 * Basically, It's for test need. It's easier for us to mock window object.
 */
export const getWindowObject = ($window = window) => $window;

/**
 * ref: https://stackoverflow.com/a/8876069
 */
export const getViewport = () => ({
  width: getWindowObject().document.documentElement.clientWidth || 0,
  height: getWindowObject().document.documentElement.clientHeight || 0,
});
