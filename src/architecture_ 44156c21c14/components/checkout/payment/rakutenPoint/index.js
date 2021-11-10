import Section from '../../shared/layout/section'
import I18n from 'config/locales/i18nConf'

import { usePaymentCtx } from '../context'

const RakutenPoint = () => {
  const { rakutenPoint = 0 } = usePaymentCtx()

  return (
    <Section title={I18n.t('CHECKOUT.PAYMENT.RAKUTEN_POINT.TITLE')}>
      {!rakutenPoint && <div>{I18n.t('CHECKOUT.PAYMENT.RAKUTEN_POINT.NO_POINTS')}</div>}
    </Section>
  )
}

export default RakutenPoint