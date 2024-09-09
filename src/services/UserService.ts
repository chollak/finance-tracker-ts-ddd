import { IUserRepository } from '../domain/contracts/IUserRepository';
import { User } from '../domain/User';
import { Account } from '../domain/Account';
import { Debt } from '../domain/Debt';

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

    async addUserAccount(userId: string, account: Account): Promise<void> {
        const user = await this.getUserById(userId);
        if (user) {
            user.addAccount(account);
            await this.updateUser(user);
        }
    }

    async addUserDebt(userId: string, debt: Debt): Promise<void> {
        const user = await this.getUserById(userId);
        if (user) {
            user.addDebt(debt);
            await this.updateUser(user);
        }
    }
}