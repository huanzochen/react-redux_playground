import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

const GET_TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;

const UpdateTodo = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error</p>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <h4>useMutation - update with a single entity.</h4>
        <p>id: {id} </p>
        <p>type: {type}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
      </div>
    );
  });
};

export default UpdateTodo;
