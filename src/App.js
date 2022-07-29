import logo from './mask_to_cure.webp';
import './App.css';
import {DoctorInOutButton} from "./components/doctorInOutButton";
import { useState } from "react";

function App() {
  const doctorStatuses = ["IN", "OUT"];
  const [doctorStatus, setDoctorStatus] = useState("OUT");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="shaman-mask-logo" alt="logo" />
        <p>
          Village Shaman Clinic is now open!
        </p>
      </header>
        <div className="Clinic-open-status">
          <h1 className="doctor-in-or-out">The Doctor is {doctorStatus} !</h1>
          
          {doctorStatuses.map((status) => (
            <DoctorInOutButton text={status} setStatus={setDoctorStatus} />
          ))}
        </div>
    </div>
  );
}

export default App;
