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

  const onsubmit = (e) => {
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
    <div> <p>Make Booking</p> </div>
  )
}

export default MakeBooking;