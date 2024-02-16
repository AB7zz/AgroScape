import express from 'express'
import Insertmarketplace from '../controllers/marketplace/index.js'
const router = express.Router()

router.post('/marketplace', Insertmarketplace)

export default router