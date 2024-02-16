import express from 'express'
import signup from '../controllers/signup/index.js'
import Middleware from '../middleware/index.js'

const router = express.Router()

router.post('/signup', Middleware.verifySignup, signup)

export default router