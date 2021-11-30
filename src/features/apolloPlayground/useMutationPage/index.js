import AddTodo from "../addTodo";
import AddTodoWrapper from "../addTodo/context/addTodoWrapper";

const UseMutationPage = () => {
  return (
    <>
      <AddTodoWrapper>
        <AddTodo />
      </AddTodoWrapper>
    </>
  );
};

export default UseMutationPage;
