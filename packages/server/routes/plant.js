import express from 'express'
import initPlant from '../controllers/plant/index.js'

const router = express.Router()

router.post('/plant', initPlant)

export default router