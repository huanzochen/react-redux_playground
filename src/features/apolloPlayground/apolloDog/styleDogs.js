import styled from "styled-components";

export const StyledDogs = styled.div`
  width: 50%;
`;

export const StyledDog = styled.div`
  display: flex;

  & > div {
    flex-basis: 50%;
  }
`;
