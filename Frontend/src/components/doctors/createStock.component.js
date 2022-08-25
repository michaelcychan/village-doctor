import React, {Component, useState} from 'react';

const CreateStock = (props) => {
  const initialStockState ={
    productName: "",
    price: 0,
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

  const onSubmit = e => {
    e.preventDefault();
    console.log(newStock);
  }


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
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Product Description:</label>
          <textarea
            required
            className='form-control'
            id='description'
            name='description'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select
            required
            className='form-control'
            id='category'
            name='category'
          >
            { categories.map(cat => <option value="{cat}">{cat}</option>) }
          </select>
        </div>
        <div className='form-group'>
          <input type="submit" className="btn btn-danger" />
        </div>
      </form>
    </div>
  )
}

export default CreateStock;