import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserServiceImpl } from '../services/UserServiceImpl';

const router = Router();
const userService = new UserServiceImpl(); // Instancia UserService
const userController = new UserController(userService); // Pásalo al controlador

router.get('/', userController.findAll.bind(userController));

export default router;


// npm run dev