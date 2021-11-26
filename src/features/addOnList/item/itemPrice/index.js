import { StyledItemPrice } from "./styleItemPrice";

const itemPrice = ({ discountPrice, price }) => {
  return (
    <StyledItemPrice>
      <span className="discount">
        <span>$</span>
        <span className="price">{discountPrice}</span>
        <span className="description">起</span>
      </span>
      <span className="origin">
        <span>${price}</span>
        <span className="description">起</span>
      </span>
    </StyledItemPrice>
  );
};

export default itemPrice;
