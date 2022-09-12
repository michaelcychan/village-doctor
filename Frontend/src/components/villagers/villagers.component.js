import React, {useState} from 'react';
import NavbarVillager from './navbarVillagers.component';


const VillagerPage = (props) => {

  const [shoppingCanoe, setShoppingCanoe] = useState([]);

  return(
    <>
      <NavbarVillager logout={props.logout} shoppingCanoe={shoppingCanoe} setShoppingCanoe={setShoppingCanoe} />
        <div>
          <h2> Villager Component Home</h2>
          {(props.villager) && <p>Welcome, {props.villager.name}</p>}
        </div>
        <button onClick={props.logout} className="btn btn-success" >Log out</button>
    </>
  )
}

export default VillagerPage;