import express from 'express'
import { deleteNote, getNotes, makeNote } from '../controllers/notes.js'


const router = express.Router()

router.post('/', makeNote)
router.get('/', getNotes)
router.delete('/:id', deleteNote)

export default router