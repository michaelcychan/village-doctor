import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// importing different pages
import Navbar from './components/navbar.component';
import Homepage from './components/homepage.component';
import DoctorPage from './components/doctor.component';
import VillagerPage from './components/villagers/villagers.component';
import HomeVillagers from './components/villagers/homeVillagers.component';
import MakeBooking from './components/villagers/makeBooking.component';
import Shop from './components/villagers/shop.component';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/villager" element={<VillagerPage />}>
          <Route index element={<HomeVillagers />} />
          <Route path="villager/shop" element={<Shop />} />
          <Route path="villager/booking" element={<MakeBooking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
