import { useRef, useState } from 'react'

const IUseRef = () => {
  const content = useRef(
    (() => {
      if (true) {
        return 'this is Ref content'
      }
    })()
  )

  // const content = useRef('this is Ref content')

  const [value, setValue] = useState(0)

  const plusOne = () => setValue(value + 1)

  // console.log('content.current:', content.current)

  return (
    <div>
      <h1>This is ref content</h1>
      {content.current}

      <div>
        <button onClick={plusOne}> plus one </button>
        <h3>{value}</h3>
      </div>
    </div>
  )
}

export default IUseRef
