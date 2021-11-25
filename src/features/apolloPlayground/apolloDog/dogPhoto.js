import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";

import { GET_DOG_PHOTO } from "../graphqlData/queries/dogs";

const DogPhoto = ({ breedName }) => {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed: breedName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    console.log("DogPhoto - data has been fetched.", data);
    console.log("DogPhoto - specific dog data", data.dog);

    return (
      <div>
        breedName:{breedName}
        <img
          src={data.dog.displayImage}
          style={{ height: 100 }}
          alt={breedName}
        />
      </div>
    );
  }
};

DogPhoto.propTypes = {
  breedName: PropTypes.string,
};

export default DogPhoto;
