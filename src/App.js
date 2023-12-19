import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'
import About from './components/About.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';
import { Route, Routes, Link} from "react-router-dom";

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
      <Navbar title = "TextUtils" About="About" home="Home" contact="Contact Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter Your Text To Analyse" text="Enter Your Text" mode={mode}/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </div>  
    </> 
  );
}
export default App;
