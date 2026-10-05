function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.category}</p>
    </div>
  );
}

export default TaskCard;