import { useContext } from 'react'
import { MoneyContext } from './MoneyContext'
import { UserContext } from './UserContext'

const Baby = () => {

  const userData = useContext(UserContext)
  const moneyData = useContext(MoneyContext)
  
  console.log('userData in Baby Component = ', userData)
  console.log('moneyData in Baby component = ', moneyData)

  return (
    <div>
        Baby
    </div>
  )
}

export default Baby