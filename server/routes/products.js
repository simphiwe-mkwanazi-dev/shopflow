const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
 
// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
 
// Get one product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});
 
// Create a product (admin use)
router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});
 
// Update a product (admin use)
router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});
 
// Delete a product (admin use)
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});
 
module.exports = router;
