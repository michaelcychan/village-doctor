import React, {useState} from 'react';

export const LogInDoctor = (props) => {
  const initialDoctorState = {
    docLogin: "",
    password: ""
  }

  const [doctor, setDoctor] = useState(initialDoctorState);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setDoctor({...doctor, [name]: value});
  };

  // creating a submission object
  const dataSubmission = {
    headers: {
      Accept: 'application/json',
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(doctor)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.login(dataSubmission)
  }

  return (
    <div className='page-container'>
      <h1>Doctor Log in page</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor="docLogin">Your Doctor Login:</label>
          <input
            required
            className="form-control"
            type="text"
            id="docLogin"
            name="docLogin"
            value={doctor.docLogin}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Your password:</label>
          <input
            required
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={doctor.password}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-danger" />
        </div>
      </form>
    </div>
  )
}

export default LogInDoctor;