import Todos from "./components/Todos";
import "./App.css";
import NewTodo from './components/NewTodo';
import FactsList from "./components/FactsList/FactsList";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <h1>Facts</h1>
      <FactsList />
      <h1>NewTodo</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
