import React, {useState} from 'react';

const SignUpVillager = (props) => {

  // create variable
  const [villagerPigeonMail, setVillagerPigeonMail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(null);

  const onChangeVillagerPigeonMail = e => {
    setVillagerPigeonMail(e.target.value);
  }

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangePassword = e => {
    setPassword(e.target.value);
  }

  const onChangeDob = e => {
    setDob(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newVillager = {
      villagerPigeonMail: villagerPigeonMail,
      name: name,
      password: password,
      dob: dob
    }
    console.log(newVillager);
  }

  return(
    <div>
      <h1>Sign up at your most trusted Shaman Doctor!</h1>
      <p>By signing up, you can make a booking with our most trusted shamn doctor and buy from here!</p>
      <h2>Sign Up Form</h2>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <label htmlFor="villagerPigeonMail">Your Pigeon Mail:</label>
          <input required className="form-control" type="text" id="villagerPigeonMail" name="villagerPigeonMail" />
        </div>
        <div className='form-group'>
          <label htmlFor="name">Your name:</label>
          <input required className="form-control" type="text" id="name" name="name" />
        </div>
        <div className='form-group'>
          <label htmlFor="passwordname">Your name:</label>
          <input required className="form-control" type="text" id="password" name="password" />
        </div>
        <div className='form-group'>
          <label htmlFor='dob'>Appointment Date:</label>
          <input required type='date' className='form-control' id='dob' name='dob' />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )  
}

export default SignUpVillager;