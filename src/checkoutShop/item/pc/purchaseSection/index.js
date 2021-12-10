import CouponRow from "./couponRow";

import styles from "./purchaseSection.module.scss";

import { ITEM_DOM_ID } from "../../../constants/shop/item";

const PurchaseSection = () => {
  return (
    <div className={styles.container} id={ITEM_DOM_ID.PURCHASE_SECTION}>
      <CouponRow />
    </div>
  );
};

export default PurchaseSection;
