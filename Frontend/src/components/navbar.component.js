// eslint-disable-next-line
import React , {Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/"} className="nav-link">Village Doctor Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/doctor"} className="nav-link">Doctor section</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/villager"} className="nav-link">Villager section</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;