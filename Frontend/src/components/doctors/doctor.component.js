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
        {(props.doctor) && <p>Welcome back, Shaman {props.doctor.docName}!</p>}
      </div>
      <button onClick={props.logout} className="btn btn-danger" >Log out</button>
        
    </>
  )
}

export default DoctorPage;
