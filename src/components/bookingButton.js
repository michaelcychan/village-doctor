export const BookingButton = (props) => {
  const handleClick = () => {
    props.setCounter(props.counter + 1);
  };

  return <button class="makingbooking" onClick={handleClick}>Booking for {props.day}</button>
}