import React from 'react'
import PropTypes from 'prop-types'
import ItemContext from '.'

import { initialData, location, serverSide } from '../mockData'


import { get } from 'lodash'
// https://segmentfault.com/a/1190000015605531

const ItemContextProvider = ({ children }) => {

  const getContextValue = () => {
    return {
      ...initialData.data
    }
  }

  return (
    <ItemContext.Provider value={getContextValue()}>
      {children}
    </ItemContext.Provider>
  )
}

ItemContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  // initialData: PropTypes.object.isRequired,
  initialData: PropTypes.object,
  // client: PropTypes.object.isRequired
  client: PropTypes.object
}

export default ItemContextProvider