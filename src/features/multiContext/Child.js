import { useContext } from 'react'
import { MoneyContext } from './MoneyContext'
import { UserContext } from './UserContext'
import { CompanyContext } from './CompanyContext'

import styled from 'styled-components'
import { color } from '../../utils/color'

const StyledChild = styled.div`
padding: 10px;
background-color: ${color.lightblue};
`

const Child = (props) => {
  const { children } = props

  const companyData = useContext(CompanyContext)
  const userData = useContext(UserContext) // 直接取用一整個 object
  const moneyData = useContext(MoneyContext)
  
  console.log('userData in Child Component = ', userData)
  console.log('moneyData in Child component = ', moneyData, '\nChild should not success to get moneyData') 
  console.log('companyDaya in Child component = ', companyData)

  return (
    <StyledChild>
        the userData in Child component is {userData.user} <br/>
        the companyData in Child component is {companyData.company}
      {children}
    </StyledChild>
  )
}

export default Child