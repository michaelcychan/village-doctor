import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const HomeVillagers = () => {
  return(
    <div>
      <h1>Welcome Villagers!</h1> 
      <p> You can go make a booking or a purchase.</p>
      <p> But first, you have to register to become a registered villager here first. Otherwise the healing god is not going to help you.</p>
      <p><Link to={"sign-up"} className="nav-link">Sign Up</Link> || Log-in </p>
    </div>
  )
}

export default HomeVillagers;