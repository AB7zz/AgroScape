import express from 'express'
import setReminder from '../controllers/reminder/index.js'
import fetchReminder from '../controllers/reminder/fetch.js'

const router = express.Router()

router.post('/reminder', setReminder)
router.get('/reminder/:id', fetchReminder)

export default router