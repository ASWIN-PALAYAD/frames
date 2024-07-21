import express from 'express';
import { login, register } from '../controllers/AuthController.js';


const router = express.Router();

router.post('/register',register);
router.post('/login',login);
//update 
//delete
//get a user
//follow user
//unfolow user

export default router;