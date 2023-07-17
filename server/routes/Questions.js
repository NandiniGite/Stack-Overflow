import express from 'express'
import {AskQuestion} from '../controller/Questions.js'
import {getAllQuestions} from '../controller/Questions.js'
import {deleteQuestion} from '../controller/Questions.js'
import {voteQuestion} from '../controller/Questions.js'
import auth from '../middleware/auth.js'

const router=express.Router();

router.post('/Ask', auth,AskQuestion)
router.get('/get',getAllQuestions)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id', auth, voteQuestion)

export default router;