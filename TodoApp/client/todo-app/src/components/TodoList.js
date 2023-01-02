/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";

// import { Spinner } from "./Spinner";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoList, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((result) => setList(Object.values(result)));
  }, []);

  const completeHandler = (todo) => {
    fetch("http://localhost:3030/jsonstore/todos/" + todo._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    })
      .then((response) => response.json())
      .then((result) =>
        setList((list) => list.map((t) => (t._id == todo._id ? result : t)))
      );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((t) => (
          <TodoItem key={t._id} {...t} clickHandler={completeHandler} />
        ))}
      </tbody>
    </table>
  );
};
