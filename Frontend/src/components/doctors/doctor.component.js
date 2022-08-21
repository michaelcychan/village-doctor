import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// import pages
import NavbarDoctor from './navbarDoctors.component';

const DoctorPage = () => {
  return(
    <>
      <NavbarDoctor />
        <p>Doctor Component Home</p>
    </>
  )
}

export default DoctorPage;
