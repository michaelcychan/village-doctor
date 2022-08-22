import React, {useState} from 'react';
import VillagerDataService from '../../services/villagers.service';

const SignUpVillager = (props) => {

  // Initialising the submission data while page starts
  const initialSignUpInfo = {
    villagerPigeonMail: "",
    password: "",
    name: "",
    dob: ""
  };

  const [villagerSignUpInfo, setVillagerSignUpInfo] = useState(initialSignUpInfo);

  // updating submission data while user inputs
  const handleInputChange = event => {
    const {name, value} = event.target;
    setVillagerSignUpInfo({...villagerSignUpInfo, [name]: value});
  };

  // creating a submission object when called
  const dataSubmission = {
    headers: {
      Accept: 'application/json',
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(villagerSignUpInfo)
  };

  // creating an alert message when error on submission
  const [httpOK, setHttpOK] = useState(false);
  const [message, setMessage] = useState(null);

  // submission button
  const onSubmit = (e) => {
    setMessage(null);
    e.preventDefault();
    fetch('http://localhost:8000/villagers/addnewvillager', dataSubmission)
      .then((response) => {
        setHttpOK(response.ok);
        return response.json();
      })
      .then((data) => {
        console.log(httpOK)
        if (httpOK === true) {
          console.log(data);
          setMessage('You registered successfully!')
        }
        if (httpOK === false && data.code === 11000) {
          setMessage(`Pigeon Mail ${data.keyValue.villagerPigeonMail} has been registered`);
        }
      })
  }

  return(
    <div>
      <h1>Sign up at your most trusted Shaman Doctor!</h1>
      { message &&
        <div><p>{message}</p></div> 
      }
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
