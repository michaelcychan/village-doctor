import React, {useState, useEffect} from "react";
import { Link, BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import VillagerDataService from './services/villagers.service';

// importing different pages
import Homepage from './components/homepage.component';
import DoctorPage from './components/doctors/doctor.component';
import HomeDoctors from './components/doctors/homeDoctors.component';
import LogInDoctor from './components/doctors/logInDoctor.component';
import ManageStock from './components/doctors/manageStock.component';
import CreateStock from './components/doctors/createStock.component';
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
  const initialVillagerState = {
    villagerPigeonMail: "",
    password: ""
  };

  let villagerState = initialVillagerState;
  
  const [villager, setVillager] = useState(initialVillagerState);
  const [doctor, setDoctor] = useState(null);

  const [error, setError] = useState(null);

  const logInVillagerFunction = async (villager = null) => {
    await setDoctor(null);
    try {
      const response = await VillagerDataService.logInVillager(villager);
      const villagerState = {
        villagerPigeonMail: response.data.villagerPigeonMail,
        name: response.data.name,
        dob: response.data.dob
      };
      setVillager(villagerState); 
    } catch(error) {
      console.error(error)
      setError(error)
    }
  }

  const logOutFunction = async () => {
    console.log('log out')
    await setVillager(null)
    await setDoctor(null)
  }

  const logInDoctorFunction = async (doctor = null) => {
    await setVillager(null);
    fetch('http://localhost:8000/doctors/log-in', doctor)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === 'No such doctor' || data === 'wrong password') {
          console.log(data)
        } else {
          const doctorState = {
            docName: data.docName,
            docLogin: data.Login,
          };
          setDoctor(doctorState);
        }
      })
  }

  return (
    <div className="container">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="villager" element={<VillagerPage villager={villager} logout={logOutFunction}/>}>
            <Route index element={<HomeVillagers villager={villager}/>} />
            <Route path="sign-up" element={<SignUpVillager villager={villager}/>} />
            <Route path="log-in" element={<LogInVillager villager={villager} login={logInVillagerFunction} error={error} />} />
            <Route path="shop" element={<Shop villager={villager}/>} />
            <Route path="booking" element={<MakeBooking villager={villager}/>} />
          </Route>
          <Route path="doctor" element={<DoctorPage doctor={doctor}  logout={logOutFunction} />}>
            <Route index element={<HomeDoctors doctor={doctor} logout={logOutFunction}/>} />
            <Route path='log-in' element={<LogInDoctor doctor={doctor}  login={logInDoctorFunction}/>} />
            <Route path="stock">
              <Route path="manage" element={<ManageStock doctor={doctor} />} />
              <Route path="create" element={<CreateStock doctor={doctor} />} />
            </Route>
            <Route path="appointment" element={<Appointment doctor={doctor} />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
