import { User } from "../models/user"


export interface UserService {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    // login (username: string, password: string): Promise<boolean>;
}