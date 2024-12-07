import express from "express";
import { Create, Delete, getpost, update } from "../controllers/Blog.js";
import upload from "../middleware/Multer.js";
 
const BlogsRoutes = express.Router()

BlogsRoutes.post('/create',upload.single('image'),Create)
BlogsRoutes.delete('/delete/:id',Delete)
BlogsRoutes.get('/getpost',getpost)
BlogsRoutes.put('/update/:id',upload.single('image'),update)

export default BlogsRoutes;