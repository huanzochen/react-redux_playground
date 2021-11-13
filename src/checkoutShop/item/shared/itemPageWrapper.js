import React from 'react'
import { ApolloProvider } from '@apollo/react-common'
import PropTypes from 'prop-types'
import Router from '../../components/common/router'
import { ItemContextProvider } from './context'

// import client from '../../apollo/client/shop/item'

const ItemPageWrapper = ({ initialData, children, location, serverSide }) => {
  return (
    // <ApolloProvider client={client}>
    <div>
      <ItemContextProvider initialData={initialData}>
        <Router location={location} serverSide={serverSide}>
          { children }
        </Router>
      </ItemContextProvider>
    </div>
    // </ApolloProvider>
  )
}

ItemPageWrapper.defaultProps = {
  location: '',
  serverSide: false
}

ItemPageWrapper.propTypes = {
  initialData: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]),
  location: PropTypes.string,
  serverSide: PropTypes.bool
}

export default ItemPageWrapper