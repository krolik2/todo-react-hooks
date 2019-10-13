import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    { content: "wywal smieci", isCompleted: true, isEditing: false, id: 1 },
    { content: "nakarm kota", isCompleted: false, isEditing: false, id: 2 }
  ]);
  const addTodo = content => {
    setTodos([
      ...todos,
      { content, isCompleted: false, isEditing: false, id: Date.now() }
    ]);
  };
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const toggleTodoStatus = id => {
    let currentTask = todos.find(todo => todo.id === id);
    setTodos([...todos], (currentTask.isCompleted = !currentTask.isCompleted));
  };
  const toggleEdit = id => {
    let currentTask = todos.find(todo => todo.id === id);
    setTodos([...todos], (currentTask.isEditing = !currentTask.isEditing));
  };
  const editTodo = (content) => {
    // let currentTask = todos.find(todo => todo.id === id);
    setTodos([...todos, {content}]);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodoStatus,
        toggleEdit,
        editTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
