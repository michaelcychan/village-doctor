// eslint-disable-next-line
import React, {Component, useState, useEffect} from 'react';
import VillagerDataService from '../../services/villagers.service'

const Shop = () => {
  const [itemArray, setItemArray] = useState([]);

  // https://stackoverflow.com/questions/68256270/react-map-method-render-input-dynamically-change-value-separate-fields

  useEffect(() => {
    const fetchAllItems = async () => {
      const {data: items} = await VillagerDataService.getAllStock();
      items.forEach((item) => {
        item.quantity = 0
      })
      setItemArray(items);
    }
    fetchAllItems();
  }, [])

  const handleQuantityChange = (e) => {
    const newItemArray = itemArray.map(item => {
      if (item.productName === e.target.id) {
        return {...item, quantity: e.target.value}
      }
      return item
    })
    setItemArray(newItemArray)
  }

  const addToCanoe = (e, productName, itemPrice, quantity) => {
    e.preventDefault();
    if (quantity != 0) {
      const item = {
        "itemName": productName,
        "unitPrice": itemPrice,
        "quantity": quantity
      }
      console.log(item)
    }
    
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
                    id={item.productName}
                    type="number"
                    min='0'
                    max={item.stockNumber}
                    value={item.quantity}
                    onChange={handleQuantityChange}
                  />
                  <button type="submit" onClick={(e) => addToCanoe(e, item.productName, item.price, item.quantity)} className="btn">🛶</button>
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