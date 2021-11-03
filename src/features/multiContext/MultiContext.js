import { useState, useMemo } from 'react'
import { CompanyContext } from './CompanyContext'
import { UserContext } from './UserContext'
import { MoneyContext } from './MoneyContext'

import Child from './Child'
import Baby from './Baby'

const MultiContext = () => {

  const [user, setUser] = useState('tommy')
  const [company, setCompany] = useState('Rakuten')
  const companyProviderValue = useMemo(() => {
    return { company,
      setCompany } 
  }, [company, setCompany])

  return (
    <div>
        MultiContext
      <CompanyContext.Provider value={companyProviderValue} >
        <UserContext.Provider value={{ user,
          setUser }}> 
          <Child>
            <MoneyContext.Provider value={'1000'}>
              <Baby></Baby>
            </MoneyContext.Provider>
          </Child>
        </UserContext.Provider>
      </CompanyContext.Provider>

    </div>
  )
}
export default MultiContext