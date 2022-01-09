import PropTypes from 'prop-types'

import ShopCard from './shopCard'
// import ShopNavigator from './shopNavigator'

import styles from './shopPanelSection.module.scss'

const ShopPanel = () => {
  return (
    <div className={styles.container}>
      <ShopCard />
      {/* <ShopNavigationBar isTablet={isTablet}> */}
    </div>
  )
}

ShopPanel.defaultProps = {
  isTablet: false,
}

ShopPanel.propTypes = {
  isTablet: PropTypes.bool,
}

export default ShopPanel
