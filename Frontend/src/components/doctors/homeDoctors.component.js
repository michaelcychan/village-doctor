// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const HomeDoctors = () => {
  return(
    <div>
      <div>
      <h1>Dear Doctor!</h1> 
      <p>After log in, you can go manage your stocks or see your fellow villagers!</p>
    </div>
    <div>
      <Link to={"log-in"} className="link-success" style={{ textDecoration: 'none' }}>Log In</Link>
    </div>
    </div>
    
  )
}

export default HomeDoctors;