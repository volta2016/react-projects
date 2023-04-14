const Todo = ({ todo }) => {
  const { title, description, state, priority } = todo;
  console.log(description);

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
          <button className="btn btn-sm btn-danger">Delete</button>
          <button className="btn btn-sm btn-info">Update</button>
        </div>
      </div>
      <span className="badge bg-primary rounden-pill">
        {priority && "Priority"}
      </span>
    </li>
  );
};

export default Todo;
