import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import InsightsPanel from "./components/InsightsPanel";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch("https://tasktracker-tlcz.onrender.com/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const styles = {
    heading: {
      textAlign: "center",
    }
  }

  return (
    <div>
      <h1 style={styles.heading}>Task Tracker</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} />
      <InsightsPanel />
    </div>
  );
}

export default App;
