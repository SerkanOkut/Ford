import { useState , React} from 'react'
import './App.css'
import "tailwindcss"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
