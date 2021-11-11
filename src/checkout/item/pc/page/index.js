
import { useItemCtx } from 'components/shop/item/shared/context'

const ItemPage = () => {
  const {
    merchant: {
      shop: {
        status: { statusId },
        item,
      }
    }
  } = useItemCtx()

  return (
    <MainPage/>
  ) 
}

export default ItemPage