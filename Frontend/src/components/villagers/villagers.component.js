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
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Item Name</th>
                <th scope='col'>Item price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCanoe.map(item =>
                <tr scope='row' key={item.productName}>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default VillagerPage;