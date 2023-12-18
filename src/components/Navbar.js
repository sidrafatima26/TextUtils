import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch, Route,
    Link
  } from "react-router-dom";

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> {props.title} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About"> About </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/"> {props.contact} </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"> Search </button>
      </form>
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark' : 'light'} `}>
        <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark' : 'light'} Mode</label>
        </div>
    </div>
  </div>
</nav>
    )
}
//As your app grows, you can catch a lot of bugs with typechecking. To run typechecking on the props for a component, you can assign the special propTypes property. propTypes are used to define the datatype of the values of the component.
//.isRequired : props element defined is required to be passed from parent component. If you do not add any value in the App.js file for this then it will show an error.
Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    about: PropTypes.string,
                    home: PropTypes.string,
                    contact: PropTypes.string
                }
//defaultProps is used as a precautionary measure. It is understood that you are going to pass some props values in the App.js file for NavBar but in case you for got to add the props or values in the file then defaultProps will be used and the values under defaultprops will get printed.
//Eg: If instead of <Navbar title="TextUtils" about="About" contact="Contact Us"/> It was only written as <Navbar/> ie, no values are passed with the component then in that case the default values in defaultProps will be displayed
Navbar.defaultProps = {
    title: 'Enter your title here',
    about: "About your TextUtils website",
    home: "Home Page of your TextUtils website",
    contact: "Contact the website owner for any queries"
};