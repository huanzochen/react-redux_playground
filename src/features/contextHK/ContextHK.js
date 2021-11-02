import React from 'react'
import { useItemCtx } from './context'


const ContextHK = () => {
  const { sandra, me } = useItemCtx()
  //   console.log(sandra, me)

  return (
    <div> 
        ContextHK
      <div>
        {/* {sandra} */}
      </div>
      <div>
        {/* {me} */}
      </div>
    </div>
  )
}

export default ContextHK