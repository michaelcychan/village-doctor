import logo from './mask_to_cure.webp';
import './App.css';
import {DoctorInOutButton} from "./components/doctorInOutButton";
import { useState } from "react";

function App() {
  const doctorStatuses = ["IN", "OUT"];
  const [doctorStatus, setDoctorStatus] = useState("OUT");
  const [waitingPatientTotalNumber, setWaitingPatientTotalNumber] = useState(0);
  const [waitingPatientTodayNumber, setWaitingPatientTodayNumber] = useState(0);
  const [waitingPatientTomorrowNumber, setWaitingPatientTomorrowNumber] = useState(0);

  const registerBookingToday = () => {
    setWaitingPatientTodayNumber(waitingPatientTodayNumber + 1);
    setWaitingPatientTotalNumber(waitingPatientTotalNumber + 1);
  }

  const regsiterBookingTomorrow = () => {
    setWaitingPatientTomorrowNumber(waitingPatientTomorrowNumber + 1);
    setWaitingPatientTotalNumber(waitingPatientTotalNumber + 1);
  }

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
          <h2>There are {waitingPatientTotalNumber} bookings in total.</h2>
          <h3>There are {waitingPatientTodayNumber} bookings for today.</h3>
          <h3>There are {waitingPatientTomorrowNumber} bookings for today.</h3>
          <button onClick={registerBookingToday}>Book for today</button>
          <button onClick={regsiterBookingTomorrow}>Book for tomorrow</button>
        </div>
        <div className="doctor-use">
          {doctorStatuses.map((status) => (
            <DoctorInOutButton text={status} setStatus={setDoctorStatus} />
          ))}
          </div>
    </div>
  );
}

export default App;
