import { User } from "../models/user"


export interface UserService {
    findAll(): Promise<User[]>;
}