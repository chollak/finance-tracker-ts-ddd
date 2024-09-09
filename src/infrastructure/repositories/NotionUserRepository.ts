import { User } from '../../domain/User';
import { IUserRepository } from '../../domain/contracts/IUserRepository';

export class NotionUserRepository implements IUserRepository {
    async getUserById(id: string): Promise<User | null> {
        // Здесь будет код для интеграции с Notion API
        return null;
    }

    async saveUser(user: User): Promise<void> {
        // Сохранение данных пользователя в Notion
    }

    async updateUser(user: User): Promise<void> {
        // Обновление пользователя в Notion
    }

    async deleteUser(id: string): Promise<void> {
        // Удаление пользователя из Notion
    }
}