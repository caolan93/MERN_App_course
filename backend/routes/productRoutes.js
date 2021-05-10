import express from 'express'
const router = express.Router()

import { protect, admin } from '../middleware/authMiddleware.js'
import { getProducts, getProductById, deleteProductById, updateProduct, createProduct } from '../controllers/productController.js'


// @description fetch all products
// @route GET/api/products
// @access Public
router.route('/')
    .get(getProducts, admin)
    .post(protect, admin, createProduct)


// @description fetch single
// @route GET/api/products/:id
// @access Public
router.route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)

// @description fetch single
// @route GET/api/products/:id
// @access Public
router.route('/:id')
    .delete(protect, admin, deleteProductById)

export default router