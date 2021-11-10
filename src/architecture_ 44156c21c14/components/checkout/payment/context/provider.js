import { useReducer } from 'react'

import PropTypes from 'prop-types'

import { ITEM_PAGE_QUERY } from 'graphqlData/queries/item'

import { ACTION_TYPES } from 'constants/checkout/payment'
import PaymentContext from 'components/checkout/payment/context'
import { reducer, initialState } from './reducer'

import useIntegrateInitialQueryData from 'hooks/graphql/useIntegrateInitialQueryData'

const {
  SHIPPING_METHOD,
  USE_RAKUTEN_POINT,
  USE_COUPON,
  HANDLE_ERROR_SHOW,
  HANDLE_ERROR_REMOVE
} = ACTION_TYPES

const PaymentContextProvider = ({ children, initalData }) => {
  const { data, loading, error, refetch } = useIntegrateInitialQueryData(
    initialData.data,
    initialData.errors,
    ITEM_PAGE_QUERY,
    initialData.parameters
  )

  const [state, dispatch] = useReducer(reducer, {
    ...initialState
  })

  const handleErrorShow = (errorMessage) => {
    dispatch({
      type: HANDLE_ERROR_SHOW,
      payload: { errorMessage }
    })
  }
  
  const handleErrorRemove = () => {
    dispatch({
      type: HANDLE_ERROR_REMOVE
    })
  }

  const useRakutenPoint = (pointNumber) => {
    dispatch({
      type: USE_RAKUTEN_POINT,
      payload: { pointNumber }
    })
  }

  const getContextValue = () => {
    return {
      initialData,
      state,
      dispatch,
      actions: {
        handleErrorShow,
        handleErrorRemove,
        useRakutenPoint
      }
    }
  }
  return <PaymentContext.Provider value={getContextValue()}>{children}</PaymentContext.Provider>
}

PaymentContextProvider.propTypes = {
  children: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.node), PropTypes.node),
  //initialData: PropTypes.object.isRequired,
}

export default PaymentContextProvider