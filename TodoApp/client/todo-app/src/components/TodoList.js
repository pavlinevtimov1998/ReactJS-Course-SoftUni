/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";

import { Spinner } from "./Spinner";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [state, setState] = useState({ todoList: [], isLoading: true });

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((result) =>
        setState({ todoList: Object.values(result), isLoading: false })
      );
  }, []);

  const completeHandler = (todo) => {
    setState((state) => ({ ...state, isLoading: !state.isLoading }));

    fetch("http://localhost:3030/jsonstore/todos/" + todo._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    })
      .then((response) => response.json())
      .then((result) =>
        setState((state) => ({
          ...state,
          todoList: state.todoList.map((t) => (t._id == todo._id ? result : t)),
          isLoading: false,
        }))
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
        {state.isLoading && (
          <tr>
            <td>
              <Spinner />
            </td>
          </tr>
        )}
        {!state.isLoading &&
          state.todoList.map((t) => (
            <TodoItem key={t._id} {...t} clickHandler={completeHandler} />
          ))}
      </tbody>
    </table>
  );
};
