import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";
import { TodoContext } from "../contexts/TodoContext";
import EditTodoForm from "./EditTodoForm";

const TodoDetails = ({ todo }) => {
  const { deleteTodo, toggleTodoStatus, toggleEdit } = useContext(TodoContext);
  return todo.isCompleted ? (
    <li>
      <span
        className="todo__checkbox"
        onClick={() => toggleTodoStatus(todo.id)}
      >
        <FontAwesomeIcon icon={faCheck} className="icon" />
      </span>
      <p className="todo__content-completed">{todo.content}</p>
      <span className="todo__option-box">
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="icon"
          onClick={() => deleteTodo(todo.id)}
        />
      </span>
    </li>
  ) : (
    <li>
      <span
        className="todo__checkbox"
        onClick={() => toggleTodoStatus(todo.id)}
      ></span>
      <span className="todo__content">
        {todo.isEditing ? (
          <EditTodoForm id={todo.id} prevContent={todo.content} />
        ) : (
          <p>{todo.content}</p>
        )}
      </span>
      <span className="todo__option-box">
        <FontAwesomeIcon
          icon={faEdit}
          className="icon"
          onClick={() => toggleEdit(todo.id)}
        />
      </span>
    </li>
  );
};

export default TodoDetails;
