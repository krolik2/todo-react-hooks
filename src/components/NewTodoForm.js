import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { AuthContext } from '../contexts/AuthContext';

const NewTodoForm = () => {
    const { currentUser } = useContext(AuthContext);
    const { addTodo } = useContext(TodoContext);
    const [content, setContent] = useState('')

    const handleSubmit = e => {
      e.preventDefault();
      if(content.trim() !== ""){
      addTodo(content, currentUser.uid)
        setContent('');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo" value={content} onChange={(e)=>setContent(e.target.value)} />
        <input type="submit" value="add todo" />
      </form>
    </div>
  );
};

export default NewTodoForm;
