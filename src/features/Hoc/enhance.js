import React from 'react'

function enhance(WrappedComponent) {


  console.log(WrappedComponent)

  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          shout={'meow'}
          walk={'blublublu'}
          {...this.props}>
        </WrappedComponent>
      )
    }
  }


}

export default enhance