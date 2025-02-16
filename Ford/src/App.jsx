import { useState , React} from 'react'
import './App.css'
import "tailwindcss"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
