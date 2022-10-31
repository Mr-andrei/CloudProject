import Router from 'express'
import authMiddleware from "../middleware/auth.middleware.js";
import fileController from "../controllers/fileController.js";

const router = new Router
router.post('/create-file',authMiddleware,fileController.createDir )
router.get('/get-file',authMiddleware,fileController.fetFiles )





export default router