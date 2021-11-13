
import { useItemCtx } from '../../../shared/context'

// import styles from './shopCard.module.scss'

const ShopCard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.shopInfo}>
        {/* <ShopLogo></ShopLogo> */}
        <div className={styles.detail}>
          <div className={styles.titlesection}>

          </div>
          <div className={styles.labelSection}>
            {/* {isNotEmptyArray(enableBadges) && ( */}
            <div className={styles.badgeContainer}>
              {enableBadges.map((badge, index) => 
                <Badge key={`shop-badge-${index}`} {...badge}></Badge>
              )}
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
      <div className={styles.shopContact}>
        {/* <ShopSubscribe></ShopSubscribe> */}
        {/* {isInquiryAccepted && <ShopContact shopUrl={shopUrl} */}
      </div>
    </div>
  )
}

export default ShopCard