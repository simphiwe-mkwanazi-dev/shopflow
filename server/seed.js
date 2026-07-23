require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany([
    { name: 'Canvas Tote Bag', description: 'Durable everyday tote', price: 24.99, category: 'Bags', stock: 40 },
    { name: 'Ceramic Mug', description: 'Hand-glazed 350ml mug', price: 14.5, category: 'Home', stock: 60 },
    { name: 'Wireless Earbuds', description: 'Bluetooth 5.0, 20hr battery', price: 39.99, category: 'Electronics', stock: 25 },
    { name: 'Notebook Set', description: 'Pack of 3 dotted notebooks', price: 12.0, category: 'Stationery', stock: 80 }
  ]);
  console.log('Seed data inserted!');
  mongoose.disconnect();
});