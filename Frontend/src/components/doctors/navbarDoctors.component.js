// eslint-disable-next-line
import React , {Component} from 'react';
import {Link} from 'react-router-dom';

const NavbarDoctor = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Village Doctor Home</Link>
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/"} className="nav-link">Doctor Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/stock"} className="nav-link">Stock Management</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/appointment"} className="nav-link">Appointment</Link>
          </li>
          <li className='navbar-item'>
            { doctor ? (
              <a onClick={logout} className="nav-link">Logout {doctor.docName}</a>
            ) : (
              <Link to={"/login"} className="nav-link">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavbarDoctor;