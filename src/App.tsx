import TodoList from "./Componentes/TodoList";


const App: React.FC = () => {
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <h3>N°Tareas: 4</h3>
        <h3>Pendientes: 3</h3>
      </div>
      <div>
        <h3>Agregar Tarea</h3>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;