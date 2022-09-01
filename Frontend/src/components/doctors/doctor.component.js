import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// import pages
import NavbarDoctor from './navbarDoctors.component';

const DoctorPage = (props) => {
  return(
    <>
      <NavbarDoctor />
      <div>
        <p>Doctor Component Home</p>
        {(props.doctor) 
          && <div><p>Welcome back, Shaman {props.doctor.docName}!</p>
          <button onClick={props.logout} className="btn btn-danger" >Log out</button>
          </div>
          }
      </div>
    </>
  )
}

export default DoctorPage;
