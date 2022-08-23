// eslint-disable-next-line
import React, {Component} from 'react';
import logo from '../mask_to_cure.webp';
import {Link} from 'react-router-dom';

import TestServerButton from './testServerButton';

const Homepage = () => {

  return (
    <div>
      <Link to={"/"} className="nav-link"><img src={logo} className="shaman-mask-logo" alt="logo" /></Link>
      <Link to={"/doctor"} className="nav-link">Doctor section</Link>
      <Link to={"/villager"} className="nav-link">Villager section</Link>
      <p>
        Village Shaman Clinic is now open!
      </p>
      <TestServerButton />


    </div>
  )
}

export default Homepage;