import React, {useState} from 'react';

const SignUpVillager = (props) => {

  // create variable
  const initialSignUpInfo = {
    villagerPigeonMail: "",
    password: "",
    name: "",
    dob: ""
  };

  const [villagerSignUpInfo, setVillagerSignUpInfo] = useState(initialSignUpInfo);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setVillagerSignUpInfo({...villagerSignUpInfo, [name]: value});
  };


  const dataSubmission = {
    method: 'POST',
    body: JSON.stringify(villagerSignUpInfo)
  };
  
  const signUp = () => {
    return fetch
  }



  const onSubmit = (e) => {
    

    e.preventDefault();
    console.log(villagerSignUpInfo);
  }

  return(
    <div>
      <h1>Sign up at your most trusted Shaman Doctor!</h1>
      <p>By signing up, you can make a booking with our most trusted shamn doctor and buy from here!</p>
      <h2>Sign Up Form</h2>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <label htmlFor="villagerPigeonMail">Your Pigeon Mail:</label>
          <input
            required
            className="form-control"
            type="email"
            id="villagerPigeonMail"
            name="villagerPigeonMail"
            value={villagerSignUpInfo.villagerPigeonMail}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="name">Your name:</label>
          <input
            required
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={villagerSignUpInfo.name}
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
            value={villagerSignUpInfo.password}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dob'>Your Birthday:</label>
          <input
            required
            type='date'
            className='form-control'
            id='dob'
            name='dob'
            value={villagerSignUpInfo.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )  
}

export default SignUpVillager;
