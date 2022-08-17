// eslint-disable-next-line
import React , {Component} from 'react';
import {Link} from 'react-router-dom';

const NavbarVillager = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/villager"} className="nav-link">Villager Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/villager/shop"} className="nav-link">Shop</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/villager/booking"} className="nav-link">Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavbarVillager;