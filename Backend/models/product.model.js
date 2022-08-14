const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {
    type: Number
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  imageUri: {
    type: String
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'ProductCategory'
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// check foreign id: https://stackoverflow.com/questions/26008555/creating-a-foreign-key-relationship-in-mongoose