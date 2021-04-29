import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'


// @description fetch all products
// @route GET/api/products
// @access Public
router.route('/').get(getProducts)


// @description fetch single
// @route GET/api/products/:id
// @access Public
router.route('/:id').get(getProductById)

export default router