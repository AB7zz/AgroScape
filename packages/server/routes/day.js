import express from 'express'
import Nextday from '../controllers/day/index.js'
const router = express.Router()

router.post('/day', Nextday)

export default router