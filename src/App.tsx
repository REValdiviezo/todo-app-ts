import { useState } from "react";
import Todos from "./Componentes/Todos";

const mockTodos = [
  {
    id:'1',
    title: 'todo 1',
    completed: false
  },
  {
    id:'2',
    title: 'todo 2',
    completed: false
  },
  {
    id:'3',
    title: 'todo 3',
    completed: false
  },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string): void => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  return (
    <div>
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos}/>
    </div>
  );
}

export default App;