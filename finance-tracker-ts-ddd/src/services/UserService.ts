import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../domain/User';

export class UserService {
    private readonly userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(id: string, name: string): Promise<User> {
        const user = new User(id, name);
        await this.userRepository.saveUser(user);
        return user;
    }

    async getUserById(id: string): Promise<User | null> {
        return this.userRepository.getUserById(id);
    }

    async updateUser(user: User): Promise<void> {
        await this.userRepository.updateUser(user);
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.deleteUser(id);
    }
}