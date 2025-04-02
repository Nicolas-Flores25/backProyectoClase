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

  async findbyid(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const user: User | null = await this.userService.findById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Usuario no encontrado' });
    }
  }

  async findByIdRequestParams(req: Request, res: Response) {
    try {
      const user: User | null = await this.userService.findById(Number(req.query.id));
      if (user === null) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Usuario no encontradoo' });
    }
  }


  //Login

  // async login(req: Request, res: Response) {
  //   try {
  //     const { username, password } = req.query; // Parámetros por query

  //     if (!username || !password) {
  //       return res.status(400).json({ message: 'Faltan credenciales' });
  //     }

  //     const isValid = await this.userService.login(username as string, password as string);

  //     if (isValid) {
  //       res.status(200).json({ message: 'Login exitoso' });
  //     } else {
  //       res.status(401).json({ message: 'Credenciales inválidas' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error en el servidor' });
  //   }
  // }




}