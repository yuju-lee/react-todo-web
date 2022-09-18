import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreateForm from './components/TodoCreate';
import TodoTaskLeft from './components/TodoTaskLeft';
import { TodoProvider } from './TodoContext';
const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
      <TodoHead />
      <TodoCreateForm />
      <TodoList />
      <TodoTaskLeft />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
