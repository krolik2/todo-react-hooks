import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase/Config";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = db.collection("todos").onSnapshot(snapshot => {
      const newTodos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(newTodos);
      console.log("hook run");
    });
    return () => data();
  }, [todos]);

  const addTodo = content => {
    db.collection("todos").add({ content, isCompleted: false });
  };
  const deleteTodo = id => {
    db.collection("todos")
      .doc(id)
      .delete();
  };
  const toggleTodoStatus = id => {
    const currentTask = todos.find(todo => todo.id === id);
    const flip = (currentTask.isCompleted = !currentTask.isCompleted);
    db.collection("todos")
      .doc(id)
      .update({
        isCompleted: flip
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
