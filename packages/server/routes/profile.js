import express from 'express'
import Fetchprofile from '../controllers/profile/fetch.js'
const router = express.Router()

router.get('/profile/:id', Fetchprofile)

export default router