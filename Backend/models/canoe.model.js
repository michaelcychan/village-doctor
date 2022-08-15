const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// shopping cart
const canoeSchema = new Schema({
  // array of productID
  items: {
    type: Array,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  // can copy from buyer, can be different string
  hutAddress: {
    type: String,
    required: true
  },
  // from buyer
  villagerPigeonMail: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Canoe = mongoose.model('Canoe', canoeSchema);

module.exports = Canoe;