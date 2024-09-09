import { IUserRepository } from './IUserRepository';
import { User } from '../domain/User';
import fs from 'fs';
import path from 'path';

export class FileUserRepository implements IUserRepository {
    private readonly filePath = path.resolve(__dirname, '../../data/users.json');

    async getUserById(id: string): Promise<User | null> {
        const users = this.readUsersFromFile();
        const user = users.find((u: User) => u.getId() === id);
        return user || null;
    }

    async saveUser(user: User): Promise<void> {
        const users = this.readUsersFromFile();
        users.push(user);
        this.writeUsersToFile(users);
    }

    async updateUser(user: User): Promise<void> {
        let users = this.readUsersFromFile();
        users = users.map((u: User) => (u.getId() === user.getId() ? user : u));
        this.writeUsersToFile(users);
    }

    async deleteUser(id: string): Promise<void> {
        let users = this.readUsersFromFile();
        users = users.filter((u: User) => u.getId() !== id);
        this.writeUsersToFile(users);
    }

    private readUsersFromFile(): User[] {
        if (!fs.existsSync(this.filePath)) {
            return [];
        }
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data) as User[];
    }

    private writeUsersToFile(users: User[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
    }
}