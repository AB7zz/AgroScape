import express from 'express'
import marketplace from '../controllers/marketplace/index.js'
const router = express.Router()

router.post('/marketplace',marketplace)

export default router