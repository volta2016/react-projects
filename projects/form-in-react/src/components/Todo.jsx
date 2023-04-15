const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;

  return (
    <li className="todo d-flex justify-content-between align-items-start p-2 mb-1">
      <div>
        <h5 className={`${state && "text-decoration-line-through"}`}>
          {title}
        </h5>
        <p className={`${state && "text-decoration-line-through"}`}>
          {description}
        </p>
        <div className="d-flex gap-2">
          <button
            onClick={() => deleteTodo(id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => updateTodo(id)}
            className="btn btn-sm btn-info"
          >
            Update
          </button>
        </div>
      </div>
      <span className="badge bg-primary rounden-pill">
        {priority && "Priority"}
      </span>
    </li>
  );
};

export default Todo;
