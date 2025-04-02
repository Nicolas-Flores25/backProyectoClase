import { User } from "../models/user";

export class UserRepository {

    async findAll (): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<User | null> {
            return User.findByPk(id);
          }

}

// async create(user: User): Promise<User> {
//     return await User.create(user);
//   }

//   async findAll(): Promise<User[]> {
//     return User.findAll();
//   }

//   async findById(id: number): Promise<User | null> {
//     return User.findByPk(id);
//   }

//   async update(id: number, user: User): Promise<[number, User[]]> {
//     return User.update(user, {
//       where: {
//         id,
//       },
//     });
//   }

//   async delete(id: number): Promise<number> {
//     return User.destroy({
//       where: {
//         id,
//       },
//     });
//   }