import express from 'express'
import updateTask from '../controllers/task/index.js'
import fetchTask from '../controllers/task/fetch.js'

const router = express.Router()

router.post('/task', updateTask)
router.get('/task/:plant/:id', fetchTask)

export default router