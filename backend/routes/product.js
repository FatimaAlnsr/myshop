const express = require('express')
const router = express.Router()

const Product = require('../models/productModel')

//@desc Fetch All Products
//@route Get /api/products
//@access Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'internal server Error' })
  }
})

//@desc Fetch single Products
//@route Get /api/products/:id
//@access Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

module.exports = router
