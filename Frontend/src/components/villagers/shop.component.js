// eslint-disable-next-line
import React, {Component, useState, useEffect} from 'react';
import VillagerDataService from '../../services/villagers.service'

const Shop = () => {
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    const fetchAllItem = async () => {
      const {data: items} = await VillagerDataService.getAllStock();
      setItemArray(items);
    }
    fetchAllItem();
  }, [])
  
  return(
    <div className='page-container'>
      <h1>Shop</h1>
      <div>
        <table className='table'>
          <thead>
          <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {itemArray.map(item => 

              <tr scope="row" key={item.productName}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
            </tr>
            )}
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default Shop;