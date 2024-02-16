import express from 'express'
import login from '../controllers/login/index.js'
import Middleware from '../middleware/index.js'
const router = express.Router()

router.post('/login', Middleware.checkUserExists, login)

export default router