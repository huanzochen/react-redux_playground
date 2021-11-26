import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faFullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

import { StyledReview } from "./styleReview";

const Review = ({ reviewStars, reviewCount }) => {
  console.log("reviewStars", reviewStars);
  console.log("reviewCount", reviewCount);

  return (
    <StyledReview>
      <FontAwesomeIcon icon={faFullStar}></FontAwesomeIcon>
    </StyledReview>
  );
};

export default Review;
