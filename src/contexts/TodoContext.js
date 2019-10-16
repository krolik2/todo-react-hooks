import React, { createContext, useState } from "react";
import { db } from "../firebase/Config";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    { content: "wywal smieci", isCompleted: true, isEditing: false, id: 1 },
    { content: "nakarm kota", isCompleted: false, isEditing: false, id: 2 }
  ]);

  db.collection("todos")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
    });

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

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodoStatus
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
