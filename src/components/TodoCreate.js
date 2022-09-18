import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
  
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  
`;

const Input = styled.input`  
  padding: 12px;
  border-radius: 10px 0px 0px 10px;
  border: 0px;
  width: 100%;
  outline: none;
  font-size: 18px;
  height:50px;
  background: #F7F9F9;
  float: left;
  box-sizing: border-box;
`;

const InsertForm = styled.form`
  
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 100px;
  padding-bottom: 20px;
`;

const Td = styled.td`
  margin: 0px;
  padding: 0px;
`;

const Table = styled.table`
  margin-left:auto; 
  margin-right:auto; 
  width: 118%;
  text-align: center;
  border-collapse:collapse;
  border-spacing:0;
`;

const CreateButton = styled.button`
cursor: pointer;
border-radius: 0px 10px 10px 0px;
padding-top: 7px;
font-size: 20px;
border: 0;
outline: 0;
width:50px;
height: 50px;
box-sizing: border-box;
align-items: center;
justify-content: center;
float: left;
background: #eee;
&:hover {
  background: #63e6be;
}
&:active {
  background: #20c997;
}
`;

function TodoCreateForm() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
        <InsertFormPositioner>
      <InsertForm onSubmit={onSubmit}>
      <Table>
  
        <tr>
          <Td>
        <Input 
        autoFocus 
        placeholder="What is your focus for today?" 
        onChange={onChange}
        value={value}
        />
          </Td>
           <Td width="10%">
        <CreateButton>
        <MdAdd />
        </CreateButton>
          </Td>
        </tr>
  
        </Table>
        </InsertForm>      
    </InsertFormPositioner>
      
    </>
  );
}

export default React.memo(TodoCreateForm);

