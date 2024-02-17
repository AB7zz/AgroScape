import express from 'express'
import Fetchusers from '../controllers/user/fetch.js'
const router = express.Router()

router.get('/users', Fetchusers)

export default router