import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const HomeVillagers = () => {
  return(
    <div>
      <h1>Welcome Villagers!</h1> 
      <p> You can go make a booking or a purchase.</p>
      <p> But first, you have to register to become a registered villager here first. Otherwise the healing god is not going to help you.</p>
      <div>
      <Link to={"sign-up"} className="link-success" style={{ textDecoration: 'none' }}>Sign Up</Link> || <Link to={"log-in"} className="link-success" style={{ textDecoration: 'none' }}>Log In</Link>
      </div>
    </div>
  )
}

export default HomeVillagers;