import { User } from "../models/user";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }



  
}

