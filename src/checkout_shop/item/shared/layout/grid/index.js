import PropTypes from 'prop-types'
import cx from 'classnames'

// import styles from './grid.module.scss'

const Grid = ({ children, className }) => {
  const classNames = cx(styles.containerFluid, className)

  return <div className={classNames}>{children}</div>
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Grid