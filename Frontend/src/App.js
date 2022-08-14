import logo from './mask_to_cure.webp';
import './App.css';
import React from "react";
import {DoctorInOutButton} from './components/doctorInOutButton';


function App() {

  const [doctorStatus, setDoctorStatus] = React.useState('IN');

  return (

      

    <div className="App">
      <p>Doctor Log In|| Patient Log In </p> 
      <header className="App-header">
        <img src={logo} className="shaman-mask-logo" alt="logo" />
        <p>
          Village Shaman Clinic is now open!
        </p>
      </header>

      <h1>Your doctor is {doctorStatus} !</h1>

      <DoctorInOutButton dothis={setDoctorStatus} />
        
    </div>
  );
}

export default App;
