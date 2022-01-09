import { isEmpty, isArray } from 'lodash'

export const isNotEmptyArray = (arr) => isArray(arr) && !isEmpty(arr)
