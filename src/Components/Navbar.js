import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about.js">{props.about}</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-secondary rounded mx-2" onClick={() => {props.toggleMode('secondary')}} style={{height: '15px', width:'15px', cursor: 'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: '15px', width:'15px', cursor: 'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '15px', width:'15px', cursor: 'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '15px', width:'15px', cursor: 'pointer'}}></div>
              <div className="bg-light rounded mx-2" onClick={() => {props.toggleMode('light')}} style={{height: '15px', width:'15px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-dark rounded mx-2" onClick={() => {props.toggleMode('dark')}} style={{height: '15px', width:'15px', cursor: 'pointer', border: '1px solid white'}}></div>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" unchecked='true' onClick={() => {props.toggleMode()}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Toggle Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

// setting the types of the props or properties
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// setting the default values of the properties or props
Navbar.defaultProps = {
  title: 'Set the title',
  about: 'set About us'
}