import express from 'express';
import { login, register, verifyOtp } from '../controllers/userController.js';


const userRoute = express.Router();

userRoute.post('/Register', register);
userRoute.post('/Login', login);
userRoute.post('/verify-otp',verifyOtp);

export default userRoute