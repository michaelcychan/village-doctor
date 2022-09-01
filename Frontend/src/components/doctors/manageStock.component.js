import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DoctorDataService from '../../services/doctors.service';

const ManageStock = (props) => {
  const [stockArray, setStockArray] = useState([]);

  useEffect(() => {
    const fetchAllStock = async () => {
      const {data: stocks } = await DoctorDataService.getAllStock();
      setStockArray(stocks);
    }
    fetchAllStock();
  }, []) // [] means it only runs on first render

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