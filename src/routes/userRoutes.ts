import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserServiceImpl } from '../services/UserServiceImpl';

const router = Router();
const userService = new UserServiceImpl(); 
const userController = new UserController(userService); 


router.get('/', userController.findAll.bind(userController));
router.get('/findByIdByPathVariable/:id', userController.findbyid.bind(userController));
router.get('/findByIdByQueryParams', userController.findByIdRequestParams.bind(userController));

router.post('/create', (req, res, next) => {userController.create(req, res).catch(next);});


router.put('/update/:id', (req, res, next) => {userController.update(req, res).catch(next);});

router.delete('/delete/:id', (req, res, next) => {userController.delete(req, res).catch(next);});

router.get('/login', (req, res, next) => {userController.login(req, res).catch(next);});

export default router;
    

// npm run dev    