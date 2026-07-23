const mongoose = require('mongoose');
 
const orderSchema = new mongoose.Schema({
  customerEmail: String,
  items: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: 'pending' },
  stripePaymentId: String
}, { timestamps: true });
 
module.exports = mongoose.model('Order', orderSchema);
