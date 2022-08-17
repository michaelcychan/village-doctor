import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// import pages
import NavbarVillager from './navbarVillagers.component';
// import HomeVillagers from './homeVillagers.component';
// import MakeBooking from './makeBooking.component';
// import Shop from './shop.component';

const VillagerPage = () => {
  return(
    <>
      <NavbarVillager />
        <p> Villager Component Home</p>
    </>
  )
}

export default VillagerPage;