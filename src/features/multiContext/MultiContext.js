import { UserContext } from './UserContext'
import { MoneyContext } from './MoneyContext'

import Child from './Child'
import Baby from './Baby'

const MultiContext = () => {
  return (
    <div>
        MultiContext
      <UserContext.Provider value={'tommy'}> 
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