// eslint-disable-next-line
import React , {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';

const NavbarDoctor = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to={"/doctor"} className="nav-link">Doctor Home</Link>
            </li>
            <li className='navbar-item'>
              <Link to={"/doctor/stock"} className="nav-link">Stock Management</Link>
            </li>
            <li className='navbar-item'>
              <Link to={"/doctor/appointment"} className="nav-link">Appointment</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};


export default NavbarDoctor;