import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';



const PrevDay = styled.button`
  font-size: 24px;
  text-align:center;
  vertical-align:center;
  outline: none;
  border: 0px;
  background: transparent;

  &:hover {
    color: #63e6be;
  }
  &:active {
    color: #20c997;
  }

`;

const NextDay = styled.button`
  font-size: 24px;
  vertical-align:center;
  text-align:center;
  outline: none;
  border: 0px;
  background: transparent;

  &:hover {
    color: #63e6be;
  }
  &:active {
    color: #20c997;
  }

`;

const TodoHeadBlock = styled.div`
  background: #F8F9F9;
  border-radius: 16px;
  padding-top: 35px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 35px;

  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
    text-align: center;
  }
  
  .day {
    margin-top: 4px;
    color: #B3B6B7;
    font-size: 16px;
    text-align: center;
    font-weight: 800;
  }
`;

const Table = styled.table`
  margin-left:auto; 
  margin-right:auto; 
  width: 100%;
  text-align: center;
  border-collapse:collapse;
  border-spacing:0;
`;


function TodoHead() {
  const todos = useTodoState();
  console.log(todos);

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });


  return (
  <TodoHeadBlock>
      <Table>
      <tr>
        <td>
      <PrevDay>&lt;</PrevDay>
      </td>
      <td>
      <h1>{dateString}</h1>
      </td>
      <td>
      <NextDay>&gt;</NextDay>
      </td>
      </tr>
      </Table>
      <div className="day">{dayName}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;