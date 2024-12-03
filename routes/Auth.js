import express from "express";
import { Login, Logout, Register, updateProfile } from "../controllers/Auth.js";
// import upload from "../middleware/Multer.js";
// import { isLogin } from "../middleware/isAdmin.js";
 
const AuthRoutes = express.Router()

AuthRoutes.post('/register',Register)
// AuthRoutes.post('/register',upload.single('profile') ,Register)
// AuthRoutes.patch('/profile/:id',upload.single('profile'),isLogin,updateProfile)
AuthRoutes.post('/login', Login)
// AuthRoutes.post('/logout', Logout)

export default AuthRoutes;