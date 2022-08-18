// eslint-disable-next-line
import React, {Component, useState} from 'react';

const MakeBooking = (props) => {

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
          <label for="villagerPigeonMail">Your Pigeon Mail:</label>
          <input required className="form-control" id="villagerPigeonMail" name="villagerPigeonMail" />
        </div>
        <div className='form-group'>
          <label for="complainOf">Your complaint:</label>
          <input required className="form-control" type="text" id="complainOf" name="complainOf" />
        </div>
        <div className='form-group'>
          <label for="dob">Date of Birth:</label>
          <input required type ="date" id="dob" name="dob" class="form-control"/>
        </div>
        <div className='form-group'>
          <label for="date">Your booking date:</label>
          <input required type="date" id="date" name="date" class="form-control"/>
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
}

export default MakeBooking;