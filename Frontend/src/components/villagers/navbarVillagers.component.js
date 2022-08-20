// eslint-disable-next-line
import React , {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';

const NavbarVillager = () => {
  return (
    <>
    <nav className="navbar navbar-success bg-success navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={""} className="nav-link">Villager Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"shop"} className="nav-link">Shop</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"booking"} className="nav-link">Booking</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"sign-up"} className="nav-link">Sign Up</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/"} className="nav-link">Back to Home</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
};


export default NavbarVillager;