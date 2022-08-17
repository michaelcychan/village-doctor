// eslint-disable-next-line
import React , {Component} from 'react';
import {Link} from 'react-router-dom';

const NavbarVillager = () => {
  // login variable
  const [villager, setVillager] = React.useState(null);

  const login = async (villager = null) => {
    setVillager(villager);
  }

  const logout = async () => {
    setVillager(null);
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Village Home</Link>
      <div className="collpase navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/"} className="nav-link">Villager Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/shop"} className="nav-link">Shop</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/booking"} className="nav-link">Booking</Link>
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