import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './section.module.scss'

const Section = ({ children, className, title, ...rest }) => {
  const classNames = cx(styles.section, className)

  return (
    <div className={classNames} {...rest}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}

Section.protoTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Section