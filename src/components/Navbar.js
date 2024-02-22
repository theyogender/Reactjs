import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark"  >
      <a class="navbar-brand" href="#" style={ {'margin-left': '10px','color': 'white'}}>Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul class="navbar-nav mr-auto" >
          <li class="nav-item active" >
            <a class="nav-link" href="#" style={ {'color': 'white'}}>Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={ {'color': 'white'}}>Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={ {'color': 'white'}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" style={ {'color': 'white'}} >Action</a>
              <a class="dropdown-item" href="#" style={ {'color': 'white'}} >Another action</a>
              <div class="dropdown-divider" ></div>
              <a class="dropdown-item" href="#" style={ {'color': 'white'}}>Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" style={ {'color': 'white'}}>Disabled</a>
          </li>
        </ul>
        
      </div>
      <div class="form-check form-switch" style={ {'margin-right': '30px'}}>
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changebg} />
          <label class="form-check-label" for="flexSwitchCheckDefault"  style={ {'color': 'white'}} >Dark Mode</label>
        </div>
    </nav>
  );
}

Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  textAbout: PropTypes.string.isRequired,
};

// Navbar.defaultProps={
//   Title:"YogiG",
//   textAbout:"Price2"
// }
