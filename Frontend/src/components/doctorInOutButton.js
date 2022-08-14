export const DoctorInOutButton = (props) => {
  const setDoctorStatusOut = () => {
    props.dothis('OUT');
  }

  const setDoctorStatusIn = () => {
    props.dothis('IN');
  }

  return(
    <div>
      <button className="changeStatus" onClick={setDoctorStatusOut}>OUT!</button>
      <button className="changeStatus" onClick={setDoctorStatusIn}>IN!</button>
    </div>
  );
};