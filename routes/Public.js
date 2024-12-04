import express from "express";
import { Getsinglepost } from "../controllers/public.js";

 
const PublicRoutes = express.Router()

PublicRoutes.get("/singlepost/:id",Getsinglepost)
export default PublicRoutes;