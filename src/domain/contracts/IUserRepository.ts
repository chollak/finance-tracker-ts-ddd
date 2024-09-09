import { User } from '../User';

export interface IUserRepository {
    getUserById(id: string): Promise<User | null>;
    saveUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: string): Promise<void>;
}