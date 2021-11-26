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

  console.log("reviewStars", reviewStars);
  console.log("reviewCount", reviewCount);

  return (
    <StyledItem>
      <StyledItemImg src={imageUrl}></StyledItemImg>
      <StyledItemDescription>
        <div className="title">{title}</div>
        <ItemPrice discountPrice={discountPrice} price={price} />
        <div>Review</div>
        <StyledBuyButton>
          <FontAwesomeIcon icon={faPlus} />
          <span>加購</span>
        </StyledBuyButton>
      </StyledItemDescription>
    </StyledItem>
  );
};

export default Item;
