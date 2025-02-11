// import React from 'react'

import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/home'}>
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/home'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/categories'}>
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/register'}>
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/login'}>
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
