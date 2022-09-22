import React, {Component, useState} from 'react';
import DoctorDataService from '../../services/doctors.service';

const Appointment = (props) => {

  // create variables
  const today = new Date()
  const [date, setDate] = useState(today);
  const [docLogin, SetDocLogin] = useState('IMPORT-FROM-SESSION');
  const [villagerPigeonMail, SetVillagerPigeonMail] = useState('IMPORT-FROM-SERVER-RESPONSE');

  const onChangeDate = (e) => {
    setDate(e.target.value);
  }

  const onChangeDocNotes = (e) => {
    setDocNotes(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      date: date,
    }
    console.log(appointmentData);
    DoctorDataService.searchAppointment(appointmentData)
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  return(
    <div>
      <p>Search Appointment</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='date'>Appointment Date:</label>
          <input required type='date' className='form-control' id='date' name='date' onChange={onChangeDate} defaultValue={today.toISOString().split('T')[0]} />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-danger" />
        </div>
      </form>
    
    </div>
  )
}

export default Appointment;