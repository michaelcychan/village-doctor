import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const ManageStock = (props) => {
  return(
    <>
      <div className='container navbar-collapse'>
        <h2>Manage Stock</h2>
        <p> 
        <Link to={"../create"} className="nav-link">Add new item</Link>
        </p>
      </div>
    </>
  )
}

export default ManageStock;