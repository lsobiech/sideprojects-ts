import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from './components/NewTodo';
import Facts from "./components/Facts";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <h1>Facts</h1>
      <Facts />
      <h1>NewTodo</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
