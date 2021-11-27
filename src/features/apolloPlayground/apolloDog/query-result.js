import React from "react";
import PropTypes from "prop-types";

const QueryResult = ({ loading, error, data, children }) => {
  if (loading) return <p>sdfksfdsklsfj</p>;
  if (error) return `Error ${error.message}`;
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) return <>{children}</>;
};

QueryResult.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.object,
  children: PropTypes.node,
};

export default QueryResult;
