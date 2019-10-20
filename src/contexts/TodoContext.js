import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase/Config";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    return db.collection("todos").orderBy('timeStamp').onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { content, isCompleted } = doc.data();
        list.push({
          id: doc.id,
          content,
          isCompleted
        });
      });
      setTodos(list);
      console.log(" fetch hook run");
    });
  }, []);

  const addTodo = content => {
    db.collection("todos").add({ content, isCompleted: false, timeStamp: Date.now() });
  };
  const deleteTodo = id => {
    db.collection("todos")
      .doc(id)
      .delete();
  };
  const toggleTodoStatus = id => {
    const currentTask = todos.find(todo => todo.id === id);
    const toggleCompleted = (currentTask.isCompleted = !currentTask.isCompleted);
    db.collection("todos")
      .doc(id)
      .update({
        isCompleted: toggleCompleted
      });
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
