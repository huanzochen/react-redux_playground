import PropTypes from 'prop-types'

import styles from './badge.module.scss'

const Badge = ({ badgeImage, badgeName, badgeDescription }) => {
  return (
    <div className={styles.badgeArea}>
      <span>
        <img src={badgeImage} alt={badgeName} />
        <span className={styles.badgeTitle}>{badgeName}</span>
      </span>
    </div>
  )
}

Badge.propTypes = {
  badgeName: PropTypes.string.isRequired,
  badgeDescription: PropTypes.string.isRequired,
  badgeImage: PropTypes.string.isRequired
}

export default Badge