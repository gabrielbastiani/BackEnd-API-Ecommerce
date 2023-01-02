import { Router } from 'express';
import multer from 'multer';





import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./images"));





export { router };