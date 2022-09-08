// eslint-disable-next-line
import React , {Component} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

const NavbarVillager = (props) => {
  return (
    <>
    
    <nav className="navbar navbar-success bg-success navbar-expand-md">
      <div className="container navbar-collapse">
        <Link to={""} className="nav-link">Villager Home</Link>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsingNavbarVillagers">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className="justify-content-center collapse navbar-collapse" id="collapsingNavbarVillagers">
          <ul className="mx-auto w-70 navbar-nav justify-content-center">
            <li className='navbar-item'>
              <NavLink to={"shop"} className="nav-link" shoppingCanoe={props.shoppingCanoe} setShoppingCanoe={props.setShoppingCanoe}>Shop</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to={"booking"} className="nav-link">Booking</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to={"log-in"} className="nav-link">Log-In</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to={"sign-up"} className="nav-link">Sign Up</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav ms-auto">
            <li className='navbar-item'>
              <NavLink to={"/"} className="nav-link">Back to Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};


export default NavbarVillager;