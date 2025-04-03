import { User } from "../models/user";

export class UserRepository {

    async findAll (): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<User | null> {
            return User.findByPk(id);
          }

          async create(user: Partial<User>): Promise<User> {  
            return await User.create(user);
          }
          
          async update(id: number, user: Partial<User>): Promise<[number, User[]]> {
            return await User.update(user, { where: { id }, returning: true }); 
          }
          
          async delete(id: number): Promise<number> {
            return User.destroy({ where: { id } });
          }


        

}