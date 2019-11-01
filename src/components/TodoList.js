import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import Login from "./Login";
import TodoDetails from "./TodoDetails";
import NewTodoForm from "./NewTodoForm";
import { BeatLoader } from "react-spinners";

const TodoList = () => {
  const { currentUser } = useContext(AuthContext);
  const { todos, loadingList } = useContext(TodoContext);

  return currentUser ? (
    <>
      <NewTodoForm />
      {loadingList ? (
        <BeatLoader />
      ) : (
        <div>
          <ul className="todo-list">
            {todos.map(todo => {
              return <TodoDetails todo={todo} key={todo.id} />;
            })}
          </ul>
        </div>
      )}
    </>
  ) : (
    <Login />
  );
};

export default TodoList;
