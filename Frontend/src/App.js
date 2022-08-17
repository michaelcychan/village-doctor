import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// importing different pages
import Navbar from './components/navbar.component';
import Homepage from './components/homepage.component';
import DoctorPage from './components/doctors/doctor.component';
import ManageStock from './components/doctors/manageStock.component';
import Appointment from './components/doctors/appointment.component';
import VillagerPage from './components/villagers/villagers.component';
import HomeVillagers from './components/villagers/homeVillagers.component';
import MakeBooking from './components/villagers/makeBooking.component';
import Shop from './components/villagers/shop.component';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/doctor" element={<DoctorPage />}>
            <Route path="doctor/manage-stock" element={<ManageStock />} />
            <Route path="doctor/appointment" elemtn={<Appointment />} />
          </Route>
          <Route path="/villager" element={<VillagerPage />}>
            <Route index element={<HomeVillagers />} />
            <Route path="villager/shop" element={<Shop />} />
            <Route path="villager/booking" element={<MakeBooking />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
