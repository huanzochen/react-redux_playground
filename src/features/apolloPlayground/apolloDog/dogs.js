import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { StyledDogs, StyledDog } from "./styleDogs";

const GET_DOG_INFO = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = () => {
  const { loading, error, data } = useQuery(GET_DOG_INFO);
  if (data) {
    console.log("dog data has been fetched!", data);
  }

  let content = "aaa";

  if (data) {
    content = data.dogs.map(({ id, breed }) => {
      return (
        <StyledDog key={id}>
          <div>{id}</div>:<div>{breed}</div>
        </StyledDog>
      );
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <StyledDogs>{content}</StyledDogs>;
};

export default Dogs;
