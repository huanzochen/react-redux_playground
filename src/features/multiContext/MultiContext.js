import { useState } from 'react'
import { UserContext } from './UserContext'
import { MoneyContext } from './MoneyContext'

import Child from './Child'
import Baby from './Baby'

const MultiContext = () => {

  const [user, setUser] = useState('tommy')

  return (
    <div>
        MultiContext
      <UserContext.Provider value={{ user,
        setUser }}> 
        <Child>
          <MoneyContext.Provider value={'1000'}>
            <Baby></Baby>
          </MoneyContext.Provider>
        </Child>
      </UserContext.Provider>

    </div>
  )
}
export default MultiContext