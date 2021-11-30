import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { GET_DOG_INFO } from "../graphqlData/queries/dogs";
import QueryResult from "../utils/query-result";

import { StyledDogs, StyledDog } from "./styleDogs";

const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOG_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  return (
    <>
      <QueryResult loading={loading} error={error} data={data}>
        <select name="dog" onChange={onDogSelected}>
          {data?.dogs?.map((dog) => {
            const { id, breed } = dog;
            return (
              <option key={id} value={breed}>
                {dog.breed}
              </option>
            );
          })}
        </select>
        <h4>
          If you selected the same dog twice, the dog image will loads instantly
          because of caching query results
        </h4>
      </QueryResult>
    </>
  );
};

Dogs.propTypes = {
  onDogSelected: PropTypes.func.isRequired,
};

export default Dogs;
