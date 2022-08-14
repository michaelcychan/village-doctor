import React from 'react';

export const BookingButton = (props) => {
  const handleClick = () => {
    props.setCounter(props.counter + 1);
  };

  return <button className="makingbooking" onClick={handleClick}>Booking for {props.day}</button>
}