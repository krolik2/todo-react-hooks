import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';


const EditTodo = ({id, prevContent}) => {
    const { editTodo } = useContext(TodoContext);
    const [content, setTodo] = useState(prevContent)


    const handleSubmit = e => {
      e.preventDefault();
      if(content.trim() !== ""){
      editTodo(content, id);
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