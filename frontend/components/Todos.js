import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux' 
import { toggleShowCompletedTools, toggleTodo } from '../state/todosSlice'

const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`

export default function Todo() {
  const dispatch = useDispatch() 
  const todos = useSelector(st => st.todosState.todos)   
  const showCompletedTodos = useSelector(st => st.todosState.showCompletedTodos) 
  // TODO: enable ability to complete a todo!

  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {
          todos
            .filter(todo => {
              return showCompletedTodos || !todo.complete
            })
            .map(todo => (
              <StyledTodo
              onClick={() => dispatch(toggleTodo(todo.id))} $complete={todo.complete} key={todo.id}>
                <span>{todo.label}{todo.complete && ' ✔️'}</span>
              </StyledTodo>
            ))
        }
      </ul>
      <button 
        onClick={() => dispatch(toggleShowCompletedTools())}>
        {showCompletedTodos ? 'Hide' : 'Show'} completed todos
      </button>
    </div>
  )
}
