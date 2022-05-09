
import './App.css';
import {useState} from "react";
import {TaskInputComponents, TaskListComponents} from "./components/TasksComponents";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Тест - 1", id: "t1" },
    { text: "Тест - 2", id: "t2" },
    { text: "Тест - 3", id: "t3" },
  ]);

  const addTaskHandler = (inputText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: inputText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
      <p style={{ textAlign: "center" }}>Задачу не знайдено! Додати?</p>
  );

  if (tasks.length > 0) {
    content = <TaskListComponents items={tasks} onDeleteTask={deleteTaskHandler} />;
  }

  return (
      <div>
        <section id="task-form">
          <TaskInputComponents onAddTask={addTaskHandler} />
        </section>
        <section id="tasks">{content}</section>
      </div>
  );
}

export default App;
