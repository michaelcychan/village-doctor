// eslint-disable-next-line
import React , {Component} from 'react';
import {Link} from 'react-router-dom';

const NavbarVillager = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Village Home</Link>
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/"} className="nav-link">Village Doctor Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/doctor"} className="nav-link">Doctor section</Link>
          </li>
          <li className='navbar-item'>
            { villager ? (
              <a onClick={logout} className="nav-link">Logout {villager.name}</a>
            ) : (
              <Link to={"/login"} className="nav-link">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavbarVillager;