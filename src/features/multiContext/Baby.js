import { useContext } from 'react'
import { CompanyContext } from './CompanyContext'
import { MoneyContext } from './MoneyContext'
import { UserContext } from './UserContext'

import styled from 'styled-components'
import { color } from '../../utils/color'

const StyledBaby = styled.div`
padding: 10px;
background-color: ${color.third};
`

const Baby = () => {

  const { user, setUser } = useContext(UserContext) // 修改取用方式，取用一個 useState套組.
  const moneyData = useContext(MoneyContext)
  const companyData = useContext(CompanyContext)
  
  console.log('userData in Baby Component = ', user)
  console.log('moneyData in Baby component = ', moneyData)
  console.log('companyData in Baby component = ', companyData)

  return (
    <StyledBaby>
        Baby
        the userData in Baby component is {user} <br/>
        the companyData in company component is {companyData.company}
      <div>
        <button onClick={() => setUser('sandra')}>change user name!</button>
        <button onClick={() => companyData.setCompany('Viber!')}> change company name! </button>
      </div>
    </StyledBaby>
  )
}

export default Baby