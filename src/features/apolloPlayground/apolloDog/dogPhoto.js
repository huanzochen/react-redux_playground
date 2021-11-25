import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";

import { GET_DOG_PHOTO } from "../graphqlData/queries/dogs";

const DogPhoto = ({ breedName }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed: breedName },
      skip: !breedName,
      // pollInterval: 500,
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === 4) return "Refetching!";
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error}</p>;
  if (data) {
    console.log("DogPhoto - data has been fetched.", data);
    console.log("DogPhoto - specific dog data", data.dog);

    return (
      <div>
        <div>breedName:{breedName}</div>
        <img
          src={data.dog.displayImage}
          style={{ height: 100 }}
          alt={breedName}
        />
        <button onClick={() => refetch()}>Refetch!</button>
      </div>
    );
  }
  return <p>The first Time, Nothing here...</p>;
};

DogPhoto.propTypes = {
  breedName: PropTypes.string,
};

export default DogPhoto;
