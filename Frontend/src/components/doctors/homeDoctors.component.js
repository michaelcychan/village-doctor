// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const HomeDoctors = (props) => {
  return(
    <div>
      {(props.doctor) 
        && <div><h2>Dear {props.doctor.docName},</h2> <p> you can now go manage your stocks or see your fellow villagers!</p></div>
      }
      <div>
        {(props.doctor === null)
          && <Link to={"log-in"} className="link-danger" style={{ textDecoration: 'none' }}>Log In</Link>
        } 
      </div>
    </div>
    
  )
}

export default HomeDoctors;