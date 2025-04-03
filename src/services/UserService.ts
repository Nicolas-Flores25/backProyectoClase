import { User } from "../models/user"


export interface UserService {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;  
    update(id: number, user: Partial<User>): Promise<[number, User[]]>; 
    delete(id: number): Promise<number>;
    login(username: string, password: string): Promise<boolean>;
}