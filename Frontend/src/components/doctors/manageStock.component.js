import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DoctorDataService from '../../services/doctors.service';

const ManageStock = (props) => {
  const [stockArray, setStockArray] = useState([]);

  const fetchAllStock = async () => {
    const {data: stocks } = await DoctorDataService.getAllStock();
    setStockArray(stocks);
  }

  useEffect(() => {
    fetchAllStock();
  }, []) // [] means it only runs on first render

  const deleteButton = async (productName) => {
    console.log(`You have pressed the delete button. productName is ${productName}`)
    try {
      const response = await DoctorDataService.deleteStock(productName)
      console.log(response.data);
      await fetchAllStock();
    } catch(error) {
      console.error(error);
    }
  }

  return(
    <>
      <div className='container navbar-collapse'>
        <h2>Manage Stock</h2>
        <p> 
        <Link to={"../create"} className="nav-link">Add new item</Link>
        </p>
        <div>
        <table className='table'>
          <thead>
          <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {stockArray.map(stock => 

              <tr scope="row" key={stock.productName}>
              <td>{stock.productName}</td>
              <td>{stock.price}</td>
              <td>{stock.description}</td>
              <td>{stock.category}</td>
              <td>{stock.stockNumber}</td>
              <td><button id={stock.productName}>✍️</button><button id={stock.productName} onClick={() => deleteButton(stock.productName)}>🗑️</button></td>
            </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ManageStock;