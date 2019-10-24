import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./contexts/AuthContext";
import Signup from './components/Signup';
import Login from './components/Login';
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthContextProvider>
        <TodoContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
          </TodoContextProvider>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
