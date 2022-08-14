import React from 'react';
import {DoctorInOutButton} from "./doctorInOutButton";
import {BookingButton} from "./bookingButton";
import logo from '../mask_to_cure.webp';

export const HomePage = () => {

  const doctorStatuses = ["IN", "OUT"];
  const [doctorStatus, setDoctorStatus] = React.useState("OUT");

  const [waitingPatientTodayNumber, setWaitingPatientTodayNumber] = React.useState(0);
  const [waitingPatientTomorrowNumber, setWaitingPatientTomorrowNumber] = React.useState(0);

  const bookingDays = [
    {day: "Today", setfunction: setWaitingPatientTodayNumber, counter: waitingPatientTodayNumber},
    {day: "Tomorrow", setfunction: setWaitingPatientTomorrowNumber, counter: waitingPatientTomorrowNumber}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="shaman-mask-logo" alt="logo" />
        <p>
          Village Shaman Clinic is now open!
        </p>
      </header>
        <div className="clinic-status">
          <h1 className="doctor-in-or-out">The Doctor is {doctorStatus} !</h1>
          <h2>There are {waitingPatientTodayNumber + waitingPatientTomorrowNumber} bookings in total.</h2>
          <h3>There are {waitingPatientTodayNumber} bookings for today.</h3>
          <h3>There are {waitingPatientTomorrowNumber} bookings for today.</h3>
          
          {bookingDays.map((day) => (
            // eslint-disable-next-line react/jsx-key
            <BookingButton day={day.day} setCounter={day.setfunction} counter={day.counter} />
          ))}
          
        </div>
        <div className="doctor-use">
          {doctorStatuses.map((status) => (
            // eslint-disable-next-line react/jsx-key
            <DoctorInOutButton text={status} setStatus={setDoctorStatus} />
          ))}
        </div>
    </div>
  )
}