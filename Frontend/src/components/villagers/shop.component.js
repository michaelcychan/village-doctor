// eslint-disable-next-line
import React, {Component, useState, useEffect} from 'react';
import VillagerDataService from '../../services/villagers.service'

const Shop = () => {
  const [itemArray, setItemArray] = useState([]);
  const [shoppingCanoe, setShoppingCanoe] = useState([]);

  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const fetchAllItem = async () => {
      const {data: items} = await VillagerDataService.getAllStock();
      setItemArray(items);
    }
    fetchAllItem();
  }, [])

  const handleQuantityChange = (e) => {
    const {name, value} = e.target;
    setItemQuantity(value)
  }

  const addToCanoe = (e, productName, itemPrice, quantity) => {
    e.preventDefault();
    console.log(productName)
    console.log(e.target)
    const item = {
      "itemName": productName,
      "unitPrice": itemPrice,
      "quantity": quantity
    }
    console.log(item)
  }
  
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
              <th scope="to_cart">Add to Canoe</th>
            </tr>
          </thead>
          <tbody>
            {itemArray.map(item => 

              <tr scope="row" key={item.productName}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td className='w-50'>{item.description}</td>
              <td>{item.category}</td>
              <td>
                  <input
                    className="form-control w-75"
                    type="number"
                    min='0'
                    max={item.stockNumber}
                    value={itemQuantity}
                    onChange={handleQuantityChange}
                  />
                  <button type="submit" onClick={(e) => addToCanoe(e, item.productName, item.price, itemQuantity)} className="btn">🛶</button>
              </td>
            </tr>
            )}
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default Shop;