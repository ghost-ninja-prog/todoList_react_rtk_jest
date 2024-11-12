import React, { useState } from 'react'
import styled from 'styled-components'
import { TTodoType } from '../../store/slices/todosSlice'

const TodoWrapper = styled.div`
  border: 1px solid rgba(0,0,0, .3);
  border-radius: 5px;
  padding: 5px 10px;
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TodoCheckbox = styled.input`
  background-color: aqua;
  margin-right: 15px;
  transition: box-shadow .2s ease-in-out;
`
const TodoLabel = styled.label`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover>input {
    box-shadow: 0 0 7px 2px #ff010a76;
  }
`

const TodoTitle = styled.p`
  font-size: 18px;
  margin: 0;
`

const TodoBtn = styled.button`
  background-color: cornflowerblue;
  font-size: 1em;
  margin: 3px;
  padding: 0.25em 1em;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .2s ease-in-out;
  box-shadow: 0 0 0px 0px rgba(0,0,0, .3);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 5px 5px rgba(0,0,0, .3);
  }
`




type TTodoProps = {
  todo: TTodoType
}

const Todo: React.FC<TTodoProps> = ({ todo }) => {

  const [status, setStatus] = useState(todo.completed)


  const checkboxHandler = () => {
    setStatus(!status)
  }


  return (
    <TodoWrapper>
      <TodoLabel>
        <TodoCheckbox
          type='checkbox'
          checked={status}
          onChange={checkboxHandler}
        />
        <TodoTitle>
          {todo.title}
        </TodoTitle>
      </TodoLabel>
      <TodoBtn>
        &times;
      </TodoBtn>
    </TodoWrapper>
  )
}

export default Todo