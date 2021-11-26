import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemPrice from "./itemPrice";
import Review from "./review";

import {
  StyledItem,
  StyledItemImg,
  StyledItemDescription,
  StyledBuyButton,
} from "./styleItem";

const Item = ({ data }) => {
  const { imageUrl, title, discountPrice, price, reviewStars, reviewCount } =
    data;

  return (
    <StyledItem>
      <StyledItemImg src={imageUrl}></StyledItemImg>
      <StyledItemDescription>
        <div className="title">{title}</div>
        <ItemPrice discountPrice={discountPrice} price={price} />
        <Review reviewStars={reviewStars} reviewCount={reviewCount} />
        <StyledBuyButton>
          <FontAwesomeIcon icon={faPlus} />
          <span>加購</span>
        </StyledBuyButton>
      </StyledItemDescription>
    </StyledItem>
  );
};

export default Item;
