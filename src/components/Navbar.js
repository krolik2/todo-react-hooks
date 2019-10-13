import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);
  return (
    <nav>
      <h1>Todo-app with React Hooks</h1>
      {isAuthenticated ? (
        <div>
          <ul>
            <li onClick={()=> toggleAuth()}><NavLink to='/'>Log Out</NavLink></li>
          </ul>
          <p>You have {todos.length} more task on your list</p>
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
