import PropTypes from "prop-types";

import ItemContext from "./context";

const ItemContextProvider = ({ children }) => {
  const sandra = "squirrel";
  const me = "fat";

  const getContextValue = () => {
    return {
      sandra: sandra,
      me: me,
    };
  };

  return (
    <ItemContext.Provider value={getContextValue()}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
