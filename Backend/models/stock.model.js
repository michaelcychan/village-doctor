const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
  category: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  amount: {
    type: Number,
    required: true,

  }, 
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;