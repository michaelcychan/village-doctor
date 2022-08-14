const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
  categoryID: {
    type: Number,
    unique: true
  },
  categoryName: {
    type: String,
    required: true
  }
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;