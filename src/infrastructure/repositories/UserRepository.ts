// src/repositories/UserRepository.ts

import { User } from '../../domain/User';
import { IUserRepository } from '../../domain/contracts/IUserRepository';

export class UserRepository implements IUserRepository {
    getUserById(id: string): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    saveUser(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    updateUser(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteUser(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}