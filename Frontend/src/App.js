import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// importing different pages
import Navbar from './components/navbar.component';
import Homepage from './components/homepage.component';
import DoctorPage from './components/doctor.component';
import VillagerPage from './components/villager.component'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/villager" element={<VillagerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
