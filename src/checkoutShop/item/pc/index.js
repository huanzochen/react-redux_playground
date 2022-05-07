import React from 'react'

import PropTypes from 'prop-types'
import ItemPageWrapper from '../shared/itemPageWrapper'

import ItemPage from './page'

const ItemPagePC = ({ initialData, location, serverSide }) => {
  return (
    <ItemPageWrapper initialData={initialData} location={location} serverSide={serverSide}>
      {/* <Switch>
        <Route>

        </Route>
      </Switch> */}

      <ItemPage />
    </ItemPageWrapper>
  )
}

ItemPagePC.defaultProps = {
  location: '',
  serverSide: false,
}

ItemPagePC.propTypes = {
  // initialData: PropTypes.object.isRequired,
  initialData: PropTypes.object,
  location: PropTypes.string,
  severSide: PropTypes.bool,
}

export default ItemPagePC
