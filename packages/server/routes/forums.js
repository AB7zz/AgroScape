import express from 'express'
import forums from '../controllers/forums/index.js'
const router = express.Router()

router.post('/forums',forums)

export default router