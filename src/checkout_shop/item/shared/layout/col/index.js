import PropTypes from 'prop-types'
import cx from 'classnames'

// import styles from './col.module.scss'

const Column = ({ children, noGutters, size, className }) => {
  const classNames = cx(styles.col, styles[`col${size}`], className, {
    [styles.noGutters]: noGutters,
  })

  return <div className={classNames}>
    {children}
  </div>
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.number, 
  noGutter: PropTypess.bool
}

export default Column