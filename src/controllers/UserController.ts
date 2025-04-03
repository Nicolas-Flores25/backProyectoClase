import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../models/user';
import { promises } from 'dns';

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

  async create(req: Request, res: Response) {
    try {
      const userData: Partial<User> = req.body;
      const createdUser = await this.userService.create(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' });
  }
}

  
async update(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const userData: Partial<User> = req.body; // 👈 Usa Partial<User>
    const [affectedCount] = await this.userService.update(id, userData);
    
    if (affectedCount === 1) {
      res.status(200).json({ message: 'Usuario actualizado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
}

  async delete(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const result: number = await this.userService.delete(id);
      if (result === 1) {
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
  }


  //Login

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.query;
      
      if (!email || !password) {
        return res.status(400).json({ message: 'Faltan email o contraseña' });
      }
  
      const success = await this.userService.login(email as string, password as string);
      
      if (success) {
        res.status(200).json({ message: 'Login exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }



}