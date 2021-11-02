import { createContext, useContext } from 'react'
import ItemContextProvider from './provider'

const ItemContext = createContext()
const useItemCtx = () => {
  const contextValue = useContext(ItemContext)
  console.log('aaaa')

  //   if (process.env.NODE_ENV === 'production' && contextValue) {
  //     // eslint-disable-next-line no-console
  //     console.error('You should use useItemCtx inside the <ItemContext.Provider>')
  //   }
  return contextValue
}

export { ItemContextProvider, useItemCtx }

export default ItemContext