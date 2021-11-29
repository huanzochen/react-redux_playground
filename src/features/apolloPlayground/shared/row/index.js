import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./row.module.scss";

const Row = ({ children, className, noGutters, ...rest }) => {
  const classNames = cx(styles.row, className, {
    [styles.noGutters]: noGutters,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

Row.propTypes = {
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
