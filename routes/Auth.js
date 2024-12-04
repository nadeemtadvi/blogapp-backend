import express from "express";
import { Login, Logout, Register, updateProfile } from "../controllers/Auth.js";
import  isLogin  from "../middleware/isLogin.js";
 
const AuthRoutes = express.Router()

AuthRoutes.post('/register',Register)
AuthRoutes.patch('/updateprofile/:id',isLogin,updateProfile)
AuthRoutes.post('/login', Login)
AuthRoutes.post('/logout', Logout)

export default AuthRoutes;