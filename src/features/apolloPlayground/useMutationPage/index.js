import AddTodo from './addTodo'
import UpdateTodo from './updateTodo'
import AddTodoWrapper from './context/addTodoWrapper'
import MultiUpdateTodo from './multiUpdateTodo'

import styled from 'styled-components'

// Style 之所以寫在外面是要簡化 sample, 方便後人理解．

const StyledTodoPair = styled.div`
  border: 2px solid green;
  padding: 10px;
`

const StyledTodosPair = styled.div`
  border: 2px solid pink;
  padding: 10px;
`

const UseMutationPage = () => {
  return (
    <>
      <AddTodoWrapper>
        <StyledTodosPair>
          <MultiUpdateTodo />
        </StyledTodosPair>
        <StyledTodoPair>
          <AddTodo />
          <UpdateTodo />
        </StyledTodoPair>
      </AddTodoWrapper>
    </>
  )
}

export default UseMutationPage
