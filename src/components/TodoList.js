import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import Login from "./Login";
import TodoDetails from "./TodoDetails";
import NewTodo from "./NewTodo";

const TodoList = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);

  return isAuthenticated ? (
    <>
      <NewTodo />
      {todos.length ? (
        <div>
          <ul className="todo-list">
            {todos.map(todo => {
              return <TodoDetails todo={todo} key={todo.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div>no more todos, yay!</div>
      )}
    </>
  ) : (
    <Login />
  );
};

export default TodoList;
