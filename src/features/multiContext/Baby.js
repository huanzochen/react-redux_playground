import { useContext } from 'react'
import { MoneyContext } from './MoneyContext'
import { UserContext } from './UserContext'

const Baby = () => {

  const { user, setUser } = useContext(UserContext)
  const moneyData = useContext(MoneyContext)
  
  console.log('userData in Baby Component = ', user)
  console.log('moneyData in Baby component = ', moneyData)

  return (
    <div>
        Baby
        the userData in Baby component is {user}
      <div>
        <button onClick={() => setUser('sandra')}>change user name!</button>
      </div>
    </div>
  )
}

export default Baby