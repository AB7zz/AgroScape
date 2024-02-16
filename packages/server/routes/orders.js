import express from 'express'
import FetchOrders from '../controllers/orders/fetch.js'
import Insertorders from '../controllers/orders/index.js'
const router = express.Router()

router.post('/orders', Insertorders)
router.get('/orders', FetchOrders)

export default router