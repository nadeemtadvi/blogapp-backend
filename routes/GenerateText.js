import express from 'express';
import { generateContent } from '../controllers/AutoGenerateText.js'; 

const Textrouter = express.Router();

Textrouter.post('/generatetext', generateContent);

export default Textrouter;
