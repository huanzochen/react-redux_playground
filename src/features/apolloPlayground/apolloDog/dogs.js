import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { GET_DOG_INFO } from "../graphqlData/queries/dogs";

import { StyledDogs, StyledDog } from "./styleDogs";

const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOG_INFO);

  let content = "";

  if (data) {
    console.log("Dogs - data has been fetched!", data);
    content = data.dogs.map((dog) => {
      const { id, breed } = dog;
      return (
        <option key={id} value={breed}>
          {dog.breed}
        </option>
      );
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <select name="dog" onChange={onDogSelected}>
        {content}
      </select>
      <h4>
        If you selected the same dog twice, the dog image will loads instantly
        because of caching query results
      </h4>
    </>
  );
};

Dogs.propTypes = {
  onDogSelected: PropTypes.func.isRequired,
};

export default Dogs;
