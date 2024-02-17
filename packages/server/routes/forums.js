import express from 'express'
import FetchForums from '../controllers/forums/fetch.js'
import FetchForumById from '../controllers/forums/fetchById.js'
import InsertForums from '../controllers/forums/insert.js'
const router = express.Router()

router.get('/forums',FetchForums)
router.get('/forums/:id', FetchForumById);
router.post('/forums', InsertForums);

export default router