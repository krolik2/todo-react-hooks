import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { TodoContext } from "../contexts/TodoContext";
import EditTodoForm from "./EditTodoForm";

const TodoDetails = ({ todo }) => {
  const { deleteTodo, toggleTodoStatus, toggleEdit } = useContext(TodoContext);
  return (
    <li>
      <span
        className="todo__checkbox"
        onClick={() => toggleTodoStatus(todo.id)}
      >
        {todo.isCompleted && (
          <FontAwesomeIcon icon={faCheck} className="icon" />
        )}
      </span>
      {todo.isCompleted ? (
        <p className="todo__content-completed">{todo.content}</p>
      ) : (
        <span
          className="todo__content"
          onDoubleClick={() => toggleEdit(todo.id)}
        >
          {todo.isEditing ? (
            <EditTodoForm id={todo.id} prevContent={todo.content} />
          ) : (
            <p>{todo.content}</p>
          )}
        </span>
      )}
      <span className="todo__deletebox">
        {todo.isCompleted && (
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon"
            onClick={() => deleteTodo(todo.id)}
          />
        )}
      </span>
    </li>
  );
};

export default TodoDetails;
