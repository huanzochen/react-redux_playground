import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
    }
  }
`

const MultiUpdateTodo = () => {
  let input
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS })
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) },
      })
    },
  })
  return (
    <div>
      <h4>
        Enhanced useMutation, this useMutation will update the cache so that will automatic refresh
        the useQuery data.
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo({ variables: { type: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default MultiUpdateTodo
