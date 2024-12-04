import express from "express";
import { Create, Delete, getpost, update } from "../controllers/Blog.js";
// import { isAdmin } from "../middleware/isAdmin.js";
import upload from "../middleware/Multer.js";
 
const BlogsRoutes = express.Router()

BlogsRoutes.post('/create',upload.single('image'),Create)
// BlogsRoutes.post('/create',isAdmin,upload.single('postimage'),Create)
BlogsRoutes.delete('/delete/:id',Delete)
BlogsRoutes.get('/getpost',getpost)
BlogsRoutes.put('/update/:id',update)
// BlogsRoutes.patch('/update/:id',isAdmin,upload.single('postimage'),update)

export default BlogsRoutes;