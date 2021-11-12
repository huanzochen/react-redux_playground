import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types'
import ItemPageWrapper from '../shared/itemPageWrapper'

import ItemPage from './page'

const ItemPagePC = ({ initialData, location, serverSide }) => {

  return (
    <ItemPageWrapper initialData={initialData} location={location} serverSide={serverSide} >
      
      {/* <Switch>
        <Route>
          
        </Route>
      </Switch> */}

      <ItemPage/>
    </ItemPageWrapper>
  )
  
}

ItemPagePC.propTypes = {
  initialData: PropTypes.object.isRequired,
  location: PropTypes.string,
  severSide: PropTypes.bool
}

export default ItemPagePC