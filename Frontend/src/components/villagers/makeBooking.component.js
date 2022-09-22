// eslint-disable-next-line
import React, {Component, useState} from 'react';

const MakeBooking = (props) => {

  
  const today = new Date();
  const daysInAdvance = 2;
  const defaultBookingDate = new Date(today.setDate(today.getDate() + daysInAdvance));

  // using hooks rather than class
  const [villagerPigeonMail, setVillagerPigeonMail] = useState(null);
  const [date, setDate] = useState(null);
  const [complainOf, setComplainOf] = useState(null);
  const [dob, setDob] = useState(null);


  // task to do: learn using object instead of separate variables
  const onChangeVillagerPigeonMail = (e) => {
    setVillagerPigeonMail(e.target.value)
  }

  const onChangeDate = (e) => {
    setDate(e.target.value)
  }

  const onChangeDob = (e) => {
    setDob(e.target.value)
  }

  const onChangeComplainOf = (e) => {
    setComplainOf(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      villagerpigeonmail: villagerPigeonMail,
      dob: dob,
      complainOf: complainOf,
      date: date
    }

    console.log(newBooking);
  }

  return(
    <div>
      <p>Make Booking</p> 
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor="villagerPigeonMail">Your Pigeon Mail:</label>
          <input required className="form-control" id="villagerPigeonMail" name="villagerPigeonMail" onChange={onChangeVillagerPigeonMail} />
        </div>
        <div className='form-group'>
          <label htmlFor="complainOf">Your complaint:</label>
          <textarea required className="form-control" id="complainOf" name="complainOf" onChange={onChangeComplainOf} />
        </div>
        <div className='form-group'>
          <label htmlFor="dob">Date of Birth:</label>
          <input required type ="date" id="dob" name="dob" max={defaultBookingDate.toISOString().split('T')[0]} className="form-control" onChange={onChangeDob} />
        </div>
        <div className='form-group'>
          <label htmlFor="date">Your booking date:</label>
          <input required type="date" id="date" name="date" className="form-control" onChange={onChangeDate} min={defaultBookingDate.toISOString().split('T')[0]} defaultValue={defaultBookingDate.toISOString().split('T')[0]} />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
}

export default MakeBooking;