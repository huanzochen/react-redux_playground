import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faFullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

const Review = ({ reviewStars, reviewCount }) => {
  console.log("reviewStars", reviewStars);
  console.log("reviewCount", reviewCount);

  return (
    <div>
      <FontAwesomeIcon icon={faFullStar}></FontAwesomeIcon>
    </div>
  );
};

export default Review;
