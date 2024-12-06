import express from "express";
import { Login, Logout, Register, updateProfile, getUser } from "../controllers/Auth.js";
import  isLogin  from "../middleware/isLogin.js";
import { loginValidation, signupValidation } from "../middleware/AuthValidation.js";
 
const AuthRoutes = express.Router()

AuthRoutes.post('/register',signupValidation,Register)
AuthRoutes.patch('/updateprofile/:id',isLogin,updateProfile)
AuthRoutes.post('/login',loginValidation, Login)
AuthRoutes.post('/logout', Logout)
AuthRoutes.get('/users',isLogin, getUser) 


export default AuthRoutes;