import express from 'express'
import Insertcomment from '../controllers/comment/Insertcomment.js'
const router = express.Router()

router.post('/comment', Insertcomment)

export default router