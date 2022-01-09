import React, { useContext } from 'react'
import { ContextExampleContext } from './ContextExample'

function Baby() {
  const data = useContext(ContextExampleContext)
  console.log('Baby')
  console.log(data)
  return (
    <>
      <div>我的名字是 {data.personal.name}</div>
      <div>
        我會的技能有
        <ul>
          {data.skills.language.map((lang, index) => {
            return <li key={index}>{lang}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Baby
