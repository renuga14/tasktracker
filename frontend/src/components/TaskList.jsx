function TaskList({ tasks }) {
  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      padding: "20px",
      margin: "20px auto",
      width: "90%",
      maxWidth: "700px",
      boxShadow: "gray",
    },
    heading: {
      color: "#333",
      textAlign: "center",

      marginBottom: "15px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#fff",
      margin: "10px 0",
      padding: "12px",
      borderRadius: "8px",
      boxShadow: "gray",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
    },
    title: {
      fontWeight: "bold",
      color: "#007bff",
      flex: "1",
      maxWidth: "250px",
    },
    description: {
      fontWeight: "30px",
      color: "#007bff",
      maxWidth: "250px",
      flex: "2",
    },
    priority: {
      backgroundColor: "#e0e0e0",
      padding: "3px 8px",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#333",
      maxWidth: "200px",

    },
    status: {
      backgroundColor: "#e0e0e0",
      padding: "3px 8px",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#333",
      maxWidth: "200px",

    },
  }


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task List</h2>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task._id} style={styles.listItem}>
            <span style={styles.title}>{task.title}</span>
            <span style={styles.description}>{task.description}</span>
            <span style={styles.priority}>{task.priority}</span>
            <span style={styles.status}>{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
