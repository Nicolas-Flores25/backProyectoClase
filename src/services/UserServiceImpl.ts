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

  findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);

}

async login(email: string, password: string): Promise<boolean> {
  const user = await User.findOne({ 
    where: { 
      email: email,
      password: password 
    }
  });
  return !!user; 
}}