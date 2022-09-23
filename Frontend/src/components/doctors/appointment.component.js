import React, {Component, useState} from 'react';
import DoctorDataService from '../../services/doctors.service';
import Moment from 'moment';

const Appointment = (props) => {

  // create variables
  const today = new Date()
  const [date, setDate] = useState(today);
  const [docLogin, SetDocLogin] = useState('IMPORT-FROM-SESSION');
  const [villagerPigeonMail, SetVillagerPigeonMail] = useState('IMPORT-FROM-SERVER-RESPONSE');

  const [appointmentList, SetApppointmentList] = useState([])

  const formateDate = Moment().format('DD-MM-YYYY')

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
      .then(response => SetApppointmentList(response.data))
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
      <main>
        <table className = 'table'>
          <thead>
            <tr>
              <th scope="col">Pigeon Mail</th>
              <th scope='col'>Date of Birth</th>
              <th scope="col">Complaints</th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map(appointment =>
              <tr scope='row' key={appointment._id}>
                <td>{appointment.villagerPigeonMail}</td>
                <td>{Moment(appointment.dob).format('DD-MM-YYYY')}</td>
                <td>{appointment.complainOf}</td>
              </tr>  
            )}
          </tbody>
        </table>
      </main>
    
    </div>
  )
}

export default Appointment;