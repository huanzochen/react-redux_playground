import AddTodo from "./addTodo";
import UpdateTodo from "./updateTodo";
import AddTodoWrapper from "./context/addTodoWrapper";

import styled from "styled-components";

const StyledTodoPair = styled.div`
  border: 2px solid green;
  padding: 10px;
`;

const UseMutationPage = () => {
  return (
    <>
      <AddTodoWrapper>
        <StyledTodoPair>
          <AddTodo />
          <UpdateTodo />
        </StyledTodoPair>
      </AddTodoWrapper>
    </>
  );
};

export default UseMutationPage;
