import React, {Component, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import DoctorDataService from '../../services/doctors.service';

const EditStock = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const emptyStockState ={
    productName: "",
    price: 0,
    stockNumber: 0,
    description: "",
    category: "",
    tag: []
  }
  const [itemData, setItemData] = useState(emptyStockState); // assigning an empty object before fetch

  const fetchItem = async () => {
    const {data: item} = await DoctorDataService.getProduct(location.state.productName);
    setItemData(item);
  }

  useEffect(() => {
    fetchItem();
  }, []) // only fetch after the page is loaded

  const categories = ["Potion", "Animal", "Plant", "Magic", "Tool"]

  const handleInputChange = event => {
    const {name, value} = event.target;
    setItemData({...itemData, [name]: value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(itemData);
      const response = await DoctorDataService.editStock(itemData);
      console.log(response.data)
      navigate("../manage")
    } catch(error) {
      console.error(error);
    }
  }

  // Tag component: https://dev.to/0shuvo0/lets-create-an-add-tags-input-with-react-js-d29

  return(
    <div className='page-container'>
      <h1>Edit Stock</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='productName'>Product Name:</label>
          <input
            required
            className='form-control'
            type='text'
            id='productName'
            name='productName'
            disabled={true}
            value={itemData.productName}
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
            value={itemData.price}
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
            value={itemData.description}
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
            value={itemData.category}
            onChange={handleInputChange}
          >
            <option value="" disabled={true}>Please select one</option>
            { categories.map(cat => <option value={cat}>{cat}</option>) }
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
            value={itemData.stockNumber}
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

export default EditStock;