// eslint-disable-next-line
import React , {Component} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

const NavbarDoctor = () => {
  return (
    <>
      <nav className="navbar navbar-danger bg-danger navbar-expand-md">
        <div className='container navbar-collapse'>
        <Link to={""} className="nav-link">Doctor Home</Link>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsingNavbarDoctor">
          <span className='navbar-toggler-icon'></span>
        </button>
          <div className="navbar-collapse collapse" id="collapsingNavbarDoctor"> 
            <ul className="mx-auto w-70 navbar-nav justify-content-center">
              <li className='navbar-item'>
                <Link to={"stock/manage"} className="nav-link">Stock Management</Link>
              </li>
              <li className='navbar-item'>
                <Link to={"appointment"} className="nav-link">Appointment</Link>
              </li>
              <li className='navbar-item'>
              <NavLink to={"log-in"} className="nav-link">Log-In</NavLink>
            </li>
            </ul>
            <ul className="nav navbar-nav ms-auto">
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