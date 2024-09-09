// src/repositories/UserRepository.ts

import { User } from '../domain/User';
import { NotionRepository } from './NotionRepository';
import { FileRepository } from './FileRepository';

export class UserRepository {
    constructor(
        private notionRepository: NotionRepository,
        private fileRepository: FileRepository
    ) { }

    public async save(user: User): Promise<void> {
        await this.notionRepository.save(user);
        this.fileRepository.save(user);
    }

    public async findById(id: string): Promise<User | null> {
        const user = await this.notionRepository.findById(id);
        if (user) {
            return user;
        }
        return this.fileRepository.findById(id);
    }
}