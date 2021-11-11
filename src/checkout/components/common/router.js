import React from 'react'
import PropTypes from 'prop-types'
import { Router as ClientRouter, StaticRouter } from 'react-router-dom'
import { $history } from '../../utils/common/history'


const Router = ({ serverSide, location, children }) => {
  if (serverSide) {
    
  }

  return (
    <ClientRouter history={$history}>
      {children}
    </ClientRouter>
  )
}

Router.defaultProps = {
  location: '',
  serverSide: false
}

Router.propTypes = {
  serverSide: PropTypes.bool,
  location: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element])
}

export default Router