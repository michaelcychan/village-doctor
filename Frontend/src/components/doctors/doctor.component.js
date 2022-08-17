import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// import pages
import NavbarDoctor from './navbarDoctors.component';
// import HomeVillagers from './homeVillagers.component';
// import MakeBooking from './makeBooking.component';
// import Shop from './shop.component';

const DoctorPage = () => {
  return(
    <>
      <NavbarDoctor />
        <p>Doctor Component Home</p>
    </>
  )
}

export default DoctorPage;
