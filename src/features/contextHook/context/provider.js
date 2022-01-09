import PropTypes from 'prop-types'

import ItemContext from '.'

const ItemContextProvider = ({ children }) => {
  const sandra = 'squirrel'
  const me = 'fat'

  const getContextValue = () => {
    return {
      sandra: sandra,
      tommy: me,
    }
  }

  return <ItemContext.Provider value={getContextValue()}>{children}</ItemContext.Provider>
}

ItemContextProvider.propTypes = {
  children: PropTypes.node,
}

export default ItemContextProvider
