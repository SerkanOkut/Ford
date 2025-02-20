import { useState , React} from 'react'
import './App.css'
import "tailwindcss"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path = "/signup" component = {SignupPage} />
    </Switch>
  );
};

export default App;
