import React, {useState} from 'react';

export const LogInVillager = (props) => {
  const initialVillagerState = {
    villagerPigeonMail: "",
    password: ""
  };

  const [villager, setVillager] = useState(initialVillagerState);


  const handleInputChange = event => {
    const {name, value} = event.target;
    setVillager({...villager, [name]: value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(villager);
  }

  return (
    <div className='page-container'>
      <h1>Villager Log in page</h1>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <label htmlFor="villagerPigeonMail">Your Pigeon Mail:</label>
          <input
            required
            className="form-control"
            type="text"
            id="villagerPigeonMail"
            name="villagerPigeonMail"
            value={villager.villagerPigeonMail}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Your password:</label>
          <input
            required
            className="form-control"
            type="text"
            id="password"
            name="password"
            value={villager.password}
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

export default LogInVillager;