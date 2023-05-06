import express from "express"
import { getClick, updateClick } from "../Controllers/Click.js"


const router = express.Router()

router.post('/updateClick',updateClick)
router.get('/clicks',getClick)

export default router