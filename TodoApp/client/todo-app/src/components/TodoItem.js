export const TodoItem = (props) => {
  let className = "todo";

  if (props.isCompleted) {
    className += " is-completed";
  }

  return (
    <tr className={className}>
      <td>{props.text}</td>
      <td>{props.isCompleted}</td>
      <td className="todo-action">
        <button
          onClick={() => props.clickHandler(props)}
          className="btn todo-btn"
        >
          Change status
        </button>
      </td>
    </tr>
  );
};
