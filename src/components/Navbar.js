import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);

  return (
    <nav>
      <h1>Todo-app with React Hooks</h1>
      {currentUser ? (
        <div>
          <ul>
            <li onClick={()=> logout()}><NavLink to='/'>Log Out</NavLink></li>
          </ul>
          <p>Hi, {currentUser.displayName} you have {todos.length} tasks on your list</p>
        </div>
        ) : (
          <div>
            <ul>
              <li><NavLink to='login'>Login</NavLink></li>
              <li><NavLink to='signup'>Signup</NavLink></li>
            </ul>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
