const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// transaction records
const transactionSchema = new Schema({
  totalCost: {
    required: true,
    type: Number
  },
  items: [
    {
      itemName: String,
      unitPrice: Number,
      quantity: Number
    }
  ]
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
