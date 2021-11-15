
import { useItemCtx } from '../../../shared/context'
import Badge from '../badge'

import { filterEnabledBadges } from '../../../../utils/item'
import { isNotEmptyArray } from '../../../../utils/common/base'

import styles from './shopCard.module.scss'

const MAX_BADGE_COUNT = 3

const ShopCard = () => {
  const {
    merchant: {
      shop: {
        isInquiryAccepted,
        shopId,
        shopUrl,
        badges,
        name: { value: shopName },
        review: { reviewCount, scoreAverage },
        contactPhone: { emailAddress: shopEmailAddress },
      },
    },
    // pageDesignFields: { shopImageUrl },
  } = useItemCtx()

  const enabledBadges = filterEnabledBadges(badges).slice(0, MAX_BADGE_COUNT)

  console.log(isInquiryAccepted,
    shopId,
    shopUrl,
    badges,
  )

  return (
    <div className={styles.container}>
      <div className={styles.shopInfo}>
        {/* <ShopLogo></ShopLogo> */}
        <div className={styles.detail}>
          <div className={styles.titlesection}>

          </div>
          <div className={styles.labelSection}>
            {isNotEmptyArray(enabledBadges) && 
            <div className={styles.badgeContainer}>
              {enabledBadges.map((badge, index) => 
                <Badge key={`shop-badge-${index}`} {...badge}></Badge>
              )}
            </div>
            }
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