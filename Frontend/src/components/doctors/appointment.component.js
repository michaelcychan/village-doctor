// eslint-disable-next-line
import React, {Component, useState} from 'react';

const Appointment = (props) => {

  // create variables
  const today = new Date()
  const [date, setDate] = useState(today);
  const [docNotes, setDocNotes] = useState(null);
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
    const newAppointment = {
      date: date,
      docNotes: docNotes,
      docLogin: docLogin,
      villagerPigeonMail: villagerPigeonMail
    }
    console.log(newAppointment);
  }

  return(
    <div>
      <p>Appointment</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='date'>Appointment Date:</label>
          <input required type='date' className='form-control' id='date' name='date' defaultValue={today.toISOString().split('T')[0]} />
        </div>
        <div className='form-group'>
          <label htmlFor="docNotes">Doctor's Notes:</label>
          <input required className="form-control" type="text" id="docNotes" name="docNotes" />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    
    </div>
  )
}

export default Appointment;