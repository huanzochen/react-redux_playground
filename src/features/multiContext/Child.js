import { useContext } from 'react'
import { MoneyContext } from './MoneyContext'
import { UserContext } from './UserContext'

const Child = (props) => {
  const { children } = props

  const userData = useContext(UserContext)
  const moneyData = useContext(MoneyContext)
  
  console.log('userData in Child Component = ', userData)
  console.log('moneyData in Child component = ', moneyData, '\nChild should not success to get moneyData') 

  return (
    <div>
        the userData in Child component is {userData.user}
      {children}
    </div>
  )
}

export default Child