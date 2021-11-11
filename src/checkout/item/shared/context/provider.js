import React from 'react'
import PropTypes from 'prop-types'
import ItemContext from './'


import { get } from 'lodash'
// https://segmentfault.com/a/1190000015605531

const ItemContextProvider = ({ 
  children,
  initialData
  // ,client 
}) => {

  return (
    <ItemContext.Provider value={{
      'test': 'ItemContextProvider'
    }}>
      {children}
    </ItemContext.Provider>
  )
}

ItemContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  initialData: PropTypes.object.isRequired,
  // client: PropTypes.object.isRequired
  client: PropTypes.object
}

export default ItemContextProvider