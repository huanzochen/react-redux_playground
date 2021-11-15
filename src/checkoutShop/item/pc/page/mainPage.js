import { ITEM_DOM_ID } from '../../../constants/shop/item'

import Grid from '../../shared/layout/grid'
import Row from '../../shared/layout/row'
import Col from '../../shared/layout/col'
import ShopPanelSection from '../shopPanelSection'


import styles from './page.module.scss'

const ItemPage = () => {
  return (
    <>
      <div className={styles.itemContainer}>
        <Grid className={styles.grid}>
          <Row noGutters>
            <Col noGutters size={12}>
              <ShopPanelSection/>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  )
}

export default ItemPage