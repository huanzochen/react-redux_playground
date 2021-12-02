import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error</p>;

  return (
    <div>
      <h4>
        Simple useMutation, Add Todo and refresh, after it you can update it
        below.
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      {(() => {
        console.log("data", data);
        if (data) {
          const { id, type } = data.addTodo;
          return (
            <div key={id}>
              The file you have just added
              <p>id: {id}</p>
              <p> type: {type}</p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default AddTodo;
