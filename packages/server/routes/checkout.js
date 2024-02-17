import express from 'express'
import PlaceOrder from '../controllers/checkout/index.js'
const router = express.Router()

router.post('/checkout',PlaceOrder)

export default router