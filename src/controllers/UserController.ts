import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../models/user';

export class UserController {
  
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async findAll(req: Request, res: Response) {
    try {
      const users: User[] = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Usuarios no encontrados' });
    }
  }



  
}