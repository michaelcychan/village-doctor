export const DoctorInOutButton = (props) => {
  const handleClick = () => {
    props.setStatus(props.text);
  };
  return <button class="changeStatus" onClick={handleClick}>I am {props.text}</button>;
};