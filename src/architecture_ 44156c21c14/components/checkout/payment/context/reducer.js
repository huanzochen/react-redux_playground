import { ACTION_TYPES } from 'constants/checkout/payment'

const {
  SHIPPING_METHOD,
  USE_RAKUTEN_POINT,
  USE_COUPON,
  HANDLE_ERROR_SHOW,
  HANDLE_ERROR_REMOVE,
} = ACTION_TYPES

export const initialState = {
  isError: false,
  errorMessage: '',
  useRakutenPoint: 0
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
  case SHIPPING_METHOD:
    return {
      ...state
    }
  
  case USE_RAKUTEN_POINT:
    return {
      ...state,
      useRakutenPoint: payload?.pointNumber ?? 0
    }
  case USE_COUPON:
    return {
      ...state,
      savedCouponList: [...state.savedCouponList, payload?.coupon]
    }
  case HANDLE_ERROR_SHOW:
    return {
      ...state,
      isError:true,
      errorModalMessage: payload?.errorModalMessage
    }
  case HANDLE_ERROR_REMOVE:
    return {
      ...state,
      isError: true,
      errorModalMessage: ''
    }
  default:
    return state
  }
}