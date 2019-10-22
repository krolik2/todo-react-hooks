import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import Login from "./Login";
import TodoDetails from "./TodoDetails";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const { currentUser} = useContext(AuthContext);
  const { todos } = useContext(TodoContext);

  return currentUser ? (
    <>
      <NewTodoForm />
      {todos.length ? (
        <div>
        <p className='tip'>double click on todo to edit</p>
          <ul className="todo-list">
            {todos.map(todo => {
              return <TodoDetails todo={todo} key={todo.id} />;
            })}
          </ul>
        </div>
      ) : (
        <p className='notification-bar'>no more todos, yay!</p>
      )}
    </>
  ) : (
    <Login />
  );
};

export default TodoList;
