import React from 'react'
import Children from './Children'

const ancestorData = {
  personal: {
    name: '黃子銓',
    age: '24',
    school: '淡江大學',
  },
  skills: {
    language: ['javascript', 'react', 'rubyonrails'],
    part: ['frontend', 'backend', 'environment'],
  },
  interest: ['cryptocurrency', 'gym', 'cooking'],
}

export const ContextExampleContext = React.createContext(ancestorData)

function ContextExample() {
  return (
    <ContextExampleContext.Provider value={ancestorData}>
      <Children />
    </ContextExampleContext.Provider>
  )
}

export default ContextExample
