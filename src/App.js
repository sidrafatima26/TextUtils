import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'
import About from './components/About.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route,
  Link
} from "react-router-dom";

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
   setAlert( {
    msg : message,
    type: type}
  )
    setTimeout( () => {
      setAlert(null);
    }, 1500)
}
  const [mode, setMode] = useState('light');//Initial State of the Navbar
  const toggleMode= () => {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
  else
  { setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
  } }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" About="About" home="Home" contact="Contact Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
      <Route exact path="/">
        <TextForm showAlert={showAlert} heading = "Enter Your Text To Analyse" text="Enter Your Text" mode={mode}/>          
      </Route>
      <Route exact path="/About">
        <About/>
      </Route>
      </Switch>
      </div>
      </Router>
    </> 
  );
}
export default App;
//Props is short for properties. In a custom component you can send some items that it can use. 
/* <h1>Enter your Text to Analyse </h1> */
/* <TextForm showAlert={showAlert} email="Enter your Email ID" heading = "Enter Your Text To Analyse" text="Enter Your Text"mode={mode}/>
<About/>
/* <Navbar/> <Navbar title="TextUtils" /> */

