import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoTaskLeftBlock = styled.div`
padding-top: 30px;
padding-bottom: 30px;
position: flex;
width: 100%;

.tasks-left {
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

span {
    color: #20c997;
}
`;

function TodoTaskLeft() {

  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
    return(
      <TodoTaskLeftBlock>
      <div className="tasks-left"><span>{undoneTasks.length} tasks</span> remaining</div>
      </TodoTaskLeftBlock>
    );
  }

export default TodoTaskLeft;