// eslint-disable-next-line
import React, {Component, useState, useEffect} from 'react';
import VillagerDataService from '../../services/villagers.service'

const Shop = (props) => {
  const [itemArray, setItemArray] = useState([]);
  const [shoppingCanoe, setShoppingCanoe] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  // https://stackoverflow.com/questions/68256270/react-map-method-render-input-dynamically-change-value-separate-fields

  // this is to get items from database and show on page
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

  // reference: https://bobbyhadz.com/blog/react-update-object-in-array
  const handleQuantityChange = (e) => {
    console.log(e.target.id)
    const newItemArray = itemArray.map(item => {
      if (item.productName == e.target.id) {
        return {...item, quantity: e.target.value}
      } else {
        return item
      }
      
    })
    setItemArray(newItemArray)
  }

  const addToCanoe = (e, productName, itemPrice, quantity) => {
    e.preventDefault();
    const item = {
      "itemName": productName,
      "unitPrice": itemPrice,
      "quantity": quantity
    }

    const tempCanoe = shoppingCanoe
    const index = tempCanoe.findIndex(element => element.itemName == item.itemName)
    if (index != -1 ) {
      tempCanoe.splice(index,1)
    }
    tempCanoe.push(item)

    const newCost = tempCanoe.reduce((acc, item) => {
      return acc + item.unitPrice * item.quantity
    }, 0)
    setTotalCost(newCost)
  
    setShoppingCanoe(tempCanoe)
    //setShoppingCanoe(existingArray => [...existingArray, item])
  }

  const checkOut = () => {
    console.log('Checking out... Below is content of shopping Canoe')
    console.log(shoppingCanoe)
    console.log('Here is the total price:')
    console.log(totalCost)
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
              <th scope="col">Quantity</th>
              <th scope="col">Item sub-total</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {itemArray.map(item => 
              <tr scope="row" key={item.productName}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td className='w-50'>{item.description}</td>
              <td>{item.category}</td>
              <td className='w-25'>
                  <input
                    className="form-control"
                    id={item.productName}
                    type="number"
                    min='0'
                    max={item.stockNumber}
                    value={item.quantity}
                    onChange={handleQuantityChange}
                  />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
              <button type="submit" onClick={(e) => addToCanoe(e, item.productName, item.price, item.quantity)} className="btn btn-success">Update 🛶</button>
              </td>
            </tr>
            )}
          </tbody>
          </table>
          <h2>Total cost: {totalCost} </h2>
          <button onClick={checkOut}>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Shop;