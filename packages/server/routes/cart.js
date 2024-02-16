import express from 'express'
import Insertcart from '../controllers/cart/index.js'
import Fetchcart from '../controllers/cart/fetch.js'
const router = express.Router()

router.post('/cart', Insertcart)
router.get('/cart', Fetchcart)

export default router