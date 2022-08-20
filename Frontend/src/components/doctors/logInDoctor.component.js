import React, {useState} from 'react';

export const LogInDoctor = (props) => {
  const [docLogin, setDocLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeDocLogin = e => {
    setDocLogin(e.target.value);
  }

  const onChangePassword = e => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const logInDoctor = {
      docLogin: docLogin,
      password: password
    }
    console.log(logInDoctor);
  }

  return (
    <div className='page-container'>
      <h1>Doctor Log in page</h1>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <label htmlFor="docLogin">Your Doctor Login:</label>
          <input required className="form-control" type="text" id="docLogin" name="docLogin" />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Your password:</label>
          <input required className="form-control" type="text" id="password" name="password" />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
}

export default LogInDoctor;