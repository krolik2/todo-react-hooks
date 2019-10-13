import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';


const EditTodo = () => {
    const { editTodo } = useContext(TodoContext);
    const [content, setTodo] = useState('')
  

    const handleSubmit = e => {
      e.preventDefault();
      if(content.trim() !== ""){
      editTodo(content);
      setTodo('');
      }
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={e => setTodo(e.target.value)}>
      </input>
    </form>
  );
};

export default EditTodo;
