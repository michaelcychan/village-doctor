import React, {Component, useEffect, useState} from 'react';
import DoctorDataService from '../../services/doctors.service';

const CreateStock = (props) => {
  const initialStockState ={
    productName: "",
    price: 0,
    stockNumber: 0,
    description: "",
    category: "",
    tag: []
  }

  const categories = ["Potion", "Animal", "Plant", "Magic", "Tool"]

  const [newStock, setNewStock] = useState(initialStockState);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setNewStock({...newStock, [name]: value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DoctorDataService.createNewStock(newStock);
      console.log(response.data.productName);
      setNewStock(initialStockState);
    } catch(error) {
      console.error(error);
    }
  }

  // Tag component: https://dev.to/0shuvo0/lets-create-an-add-tags-input-with-react-js-d29

  return(
    <div className='page-container'>
      <h1>Add new Stock</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='productName'>Product Name:</label>
          <input
            required
            className='form-control'
            type='text'
            id='productName'
            name='productName'
            value={newStock.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            required
            className='form-control'
            type='number'
            id='price'
            name='price'
            value={newStock.price}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Product Description:</label>
          <textarea
            required
            className='form-control'
            id='description'
            name='description'
            value={newStock.description}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select
            required
            className='form-control'
            id='category'
            name='category'
            value={newStock.category}
            onChange={handleInputChange}
          >
            <option value="" disabled={true}>Please select one</option>
            { categories.map(cat => <option key={cat} value={cat}>{cat}</option>) }
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='stockNumber'>Stock:</label>
          <input
            required
            className='form-control'
            type='number'
            id='stockNumber'
            name='stockNumber'
            value={newStock.stockNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-danger" />
        </div>
      </form>
    </div>
  )
}

export default CreateStock;