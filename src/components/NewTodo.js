import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const NewTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [content, setTodo] = useState('')

    const handleSubmit = e => {
      e.preventDefault();
      if(content.trim() !== ""){
      addTodo(content);
      setTodo('');
      }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo" value={content} onChange={(e)=>setTodo(e.target.value)} />
        <input type="submit" value="add todo" />
      </form>
    </div>
  );
};

export default NewTodo;
