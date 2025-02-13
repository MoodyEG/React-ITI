// import React from 'react'

import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TokenContext } from './Contexts/TokenContext';

export default function NavBar() {
  let { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/'}>
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
            {token ? (
              <>
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
                  <NavLink className="nav-link" to={'/cart'}>
                    <i className="bi bi-cart"></i>
                  </NavLink>
                </li>
                <li className="nav-item" onClick={logout}>
                  <a className="nav-link" style={{ cursor: 'pointer' }}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
