import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from '../contexts/TodoContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);

  return (
    <nav>
      <h1>Todo-app with React Hooks</h1>
      {currentUser ? (
        <div>
          <ul>
            <li onClick={()=> logout()}><NavLink to='/'><FontAwesomeIcon icon={faDoorOpen} className="log-out" title='log out' /></NavLink></li>
          </ul>
          <p className='info-bar'>Hi, {currentUser.displayName} you have {todos.length} tasks on your list</p>
        </div>
        ) : (
          null
        )
      }
    </nav>
  );
};

export default Navbar;
