import GlobalError from '../../shared/globalError'
import Row from '../../shared/layout/row'
import Col from '../../shared/layout/col'
import ShippingSection from '../shippingSection'
import Rakutenpoint from '../Rakutenpoint'
import ShopContent from '../shopContent'
import Coupon from '../coupon'
import PaymentMethodSection from '../paymentMethodSection'
import Invoice from '../invoice'
import ShopperInfo from '../shopperInfo'
import CheckBox from '../checkbox'
import CheckoutSection from '../CheckoutSection'
import styles from './page.module.scss'

const PaymentPage = () => {
  return (
    <div className={styles.container}> 
      <Row>
        <Col noGutters size={8}>
          <GlobalError/>
          <ShippingSection/>
          <Rakutenpoint/>
          <Coupon/>
          <PaymentMethodSection/>
          <Invoice/>
          <ShopperInfo />
          <ShopContent />
          <CheckBox />
        </Col>
        <Col noGutters size={4}>
          <CheckoutSection/>
        </Col>
      </Row>
    </div>
  )
}

export default PaymentPage
