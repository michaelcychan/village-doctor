// eslint-disable-next-line
import React , {Component} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

const NavbarDoctor = () => {
  return (
    <>
      <nav className="navbar navbar-danger bg-danger navbar-expand-lg">
        <div className='container navbar-collapse'>
        <Link to={""} className="nav-link">Doctor Home</Link>
          <div className="navbar-collapse collapse"> 
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to={"stock"} className="nav-link">Stock Management</Link>
              </li>
              <li className='navbar-item'>
                <Link to={"appointment"} className="nav-link">Appointment</Link>
              </li>
              <li className='navbar-item'>
              <Link to={"/"} className="nav-link">Back to Home</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};


export default NavbarDoctor;