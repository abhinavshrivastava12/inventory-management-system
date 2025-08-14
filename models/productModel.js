const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date
  },
  category: {
    type: String,
    enum: ['Electronics', 'Grocery', 'Clothing', 'Accessories', 'Other'],
    default: 'Other'
  }
});

module.exports = mongoose.model('Product', productSchema);
