import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function 
Navbar (prop) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home
          </a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
        
        
      </ul>
      <div className={`form-check form-switch text-${prop.mode === 'light'? '#042743': 'light'}`}>
  <input className="form-check-input"  onClick ={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
 
Navbar.propTypes = {
    title: propTypes.string.isRequired
}

Navbar.defaultprop = {
    title: 'Set Title Here'
};