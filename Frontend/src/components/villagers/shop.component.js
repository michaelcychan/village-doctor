// eslint-disable-next-line
import React, {Component, useState, useEffect} from 'react';
import VillagerDataService from '../../services/villagers.service'

const Shop = (props) => {
  const [itemArray, setItemArray] = useState([]);
  const [shoppingCanoe, setShoppingCanoe] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  const [message, setMessage] = useState();
  // https://stackoverflow.com/questions/68256270/react-map-method-render-input-dynamically-change-value-separate-fields

  // this is to get items from database and show on page

  const fetchAllItems = async () => {
    const {data: items} = await VillagerDataService.getAllStock();
    items.forEach((item) => {
      item.quantity = 0
    })
    setItemArray(items);
  }

  useEffect(() => {
    fetchAllItems();
  }, [])

  // reference: https://bobbyhadz.com/blog/react-update-object-in-array
  const handleQuantityChange = (e) => {
    const newItemArray = itemArray.map(item => {
      if (item.productName == e.target.id) {
        return {...item, quantity: e.target.value}
      } else {
        return item
      }
    })
    setItemArray(newItemArray)
  }

  const updateTotalCost = (newCost) => {
    setTotalCost(newCost)
  }

  const updateShoppingCanoe = (newCanoeList) => {
    setShoppingCanoe(newCanoeList)
  }

  const addToCanoe = (e, productName, itemPrice, quantity) => {
    e.preventDefault();
    const item = {
      "itemName": productName,
      "unitPrice": itemPrice,
      "quantity": Number(quantity)
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
    updateTotalCost(newCost)
    updateShoppingCanoe(tempCanoe)
  }

  const resetCanoe = () => {
    setShoppingCanoe([])
    setTotalCost(0)
  }

  const checkOut = () => {
    console.log('Checking out... Below is content of shopping Canoe')
    console.log(shoppingCanoe)
    console.log('Here is the total price:')
    console.log(totalCost)
    VillagerDataService.checkout(shoppingCanoe)
      .then(response => {
        if (response.data == 'OK') {
          fetchAllItems()
          resetCanoe()
          setMessage('Thank you for buying!')
        }
      } )
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
              <th scope="col">Stock</th>
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
              <td>{item.stockNumber}</td>
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
          {(message) && <h2 className='text-warning'>{message}</h2>}
          <h2>Total cost: <span className='text-info'> {totalCost} </span></h2>
          <button className='btn btn-success' onClick={checkOut}>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Shop;
