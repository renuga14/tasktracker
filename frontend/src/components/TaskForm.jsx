import { useState } from "react";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      priority,
      due_date: dueDate,
      status: "Open",
    };

    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        alert("Task created successfully!");
        setTitle("");
        setDescription("");
        setPriority("Medium");
        setDueDate("");
      } else {
        alert("Failed to create task");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const styles = {
    form: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#f9f9f9",
      boxShadow: "gray",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      fontFamily: "sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    input: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "14px",
    },
    textarea: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "14px",
      resize: "none",
      height: "80px",
    },
    select: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "0.3s",
    },

  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} >
      <h2 style={styles.heading}>Create Task</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        style={styles.textarea}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={styles.select}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <input
        style={styles.input}
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <br />
      <button type="submit" style={styles.button} >Add Task</button>
    </form>
  );
}





export default TaskForm;


