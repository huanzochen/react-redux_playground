import React, { useState } from 'react'
import styled from 'styled-components'
import Cat from './Cat'
import enhance from './enhance'

// const 

const EnhancedAnimal = enhance(Cat)

function Hoc() {
  return (
    <div>
      aaa
      <EnhancedAnimal
        color={'yellow'}
      >
      </EnhancedAnimal>
    </div>
  )
}

export default Hoc