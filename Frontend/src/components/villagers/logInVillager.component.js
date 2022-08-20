import React, {useState} from 'react';

export const LogInVillager = (props) => {
  const [villagerPigeonMail, setVillagerPigeonMail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const onChangeVillagerPigeonMail = e => {
    setVillagerPigeonMail(e.target.value);
  }

  const onChangePassword = e => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const logInVillager = {
      villagerPigeonMail: villagerPigeonMail,
      password: password
    }
    console.log(logInVillager);
  }

  return (
    <div className='page-container'>
      <h1>Villager Log in page</h1>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <label htmlFor="villagerPigeonMail">Your Pigeon Mail:</label>
          <input required className="form-control" type="text" id="villagerPigeonMail" name="villagerPigeonMail" />
        </div>
        <div className='form-group'>
          <label htmlFor="passwordname">Your name:</label>
          <input required className="form-control" type="text" id="password" name="password" />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
} 

export default LogInVillager;