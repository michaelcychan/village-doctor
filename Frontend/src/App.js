import React, {useState} from "react";
import { Link, BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// importing different pages
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

    
  // components for different log-in
  // https://ui.dev/react-router-pass-props-to-components
  const [villager, setVillager] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const logInVillagerFunction = async (villager = null) => {
    setVillager(villager);
    setDoctor(null);
  }

  const logOutVillagerFunction = async () => {
    setVillager(null);
  }

  const logInDoctorFunction = async (doctor = null) => {
    setDoctor(doctor);
    setVillager(null);
  }

  const logOutDoctorFunction = async () => {
    setDoctor(null);
  }


  return (
    <div className="container">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="villager" element={<VillagerPage />}>
            <Route index element={<HomeVillagers villager={villager}/>} />
            <Route path="sign-up" element={<SignUpVillager villager={villager}/>} />
            <Route path="log-in" element={<LogInVillager login={logInVillagerFunction} />} />
            <Route path="shop" element={<Shop villager={villager}/>} />
            <Route path="booking" element={<MakeBooking villager={villager}/>} />
          </Route>
          <Route path="doctor" element={<DoctorPage/>}>
            <Route index element={<HomeDoctors doctor={'Eagle Head'} />} />
            <Route path='log-in' element={<LogInDoctor login={logInDoctorFunction}/>} />
            <Route path="stock" element={<ManageStock doctor={doctor} />} />
            <Route path="appointment" element={<Appointment doctor={doctor} />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
