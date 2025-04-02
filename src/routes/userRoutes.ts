import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserServiceImpl } from '../services/UserServiceImpl';

const router = Router();
const userService = new UserServiceImpl(); 
const userController = new UserController(userService); 

router.get('/', userController.findAll.bind(userController));
router.get('/findByIdByPathVariable/:id', userController.findbyid.bind(userController));
router.get('/findByIdByQueryParams', userController.findByIdRequestParams.bind(userController));
export default router;
    

// npm run dev