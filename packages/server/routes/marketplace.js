import express from 'express'
import Insertmarketplace from '../controllers/marketplace/index.js'
import Fetchmarketplace from '../controllers/marketplace/fetch.js'
const router = express.Router()

router.post('/marketplace', Insertmarketplace)
router.get('/marketplace', Fetchmarketplace)

export default router