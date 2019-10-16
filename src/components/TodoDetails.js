import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { TodoContext } from "../contexts/TodoContext";

const TodoDetails = ({ todo }) => {
  const { deleteTodo, toggleTodoStatus } = useContext(TodoContext);
  return (
    <li>
      <span className="check-box" onClick={() => toggleTodoStatus(todo.id)}>
        {todo.isCompleted && (
          <FontAwesomeIcon icon={faCheck} className="icon" />
        )}
      </span>
      <span className={`content ${todo.isCompleted && "content-completed"}`}>
        <p className="task-content">{todo.content}</p>
      </span>
      <span className="delete-box" onClick={() => deleteTodo(todo.id)}>
        {todo.isCompleted && (
          <FontAwesomeIcon icon={faTrashAlt} className="icon" />
        )}
      </span>
    </li>
  );
};

export default TodoDetails;
