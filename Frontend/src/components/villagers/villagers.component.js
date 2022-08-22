import React from 'react';
import NavbarVillager from './navbarVillagers.component';


const VillagerPage = (props) => {
  return(
    <>
      <NavbarVillager logout={props.logout} />
        <div>
          <h2> Villager Component Home</h2>
          {(props.villager) && <p>Welcome, {props.villager.name}</p>}
        </div>
        <button onClick={props.logout} className="btn btn-success" >Log out</button>
    </>
  )
}

export default VillagerPage;