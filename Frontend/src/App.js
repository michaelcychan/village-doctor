import React from "react";
import { Link, BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// importing different pages
import Navbar from './components/navbar.component';
import Homepage from './components/homepage.component';
import DoctorPage from './components/doctors/doctor.component';
import HomeDoctors from './components/doctors/homeDoctors.component';
import LogInDoctor from './components/doctors/logInDoctor.component';
import ManageStock from './components/doctors/manageStock.component';
import Appointment from './components/doctors/appointment.component';
import VillagerPage from './components/villagers/villagers.component';
import HomeVillagers from './components/villagers/homeVillagers.component';
import SignUpVillager from './components/villagers/signUpVillager.component';
import LogInVillager from './components/villagers/logInVillager.component';
import MakeBooking from './components/villagers/makeBooking.component';
import Shop from './components/villagers/shop.component';

const App = () => {
  return (
    <div className="container">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="villager" element={<VillagerPage />}>
            <Route index element={<HomeVillagers />} />
            <Route path="sign-up" element={<SignUpVillager />} />
            <Route path="log-in" element={<LogInVillager />} />
            <Route path="shop" element={<Shop />} />
            <Route path="booking" element={<MakeBooking />} />
          </Route>
          <Route path="doctor" element={<DoctorPage />}>
            <Route index element={<HomeDoctors />} />
            <Route path='log-in' element={<LogInDoctor />} />
            <Route path="stock" element={<ManageStock />} />
            <Route path="appointment" element={<Appointment />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
