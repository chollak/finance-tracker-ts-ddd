// src/repositories/RepositoryFactory.ts
import { IUserRepository } from './IUserRepository';
import { NotionUserRepository } from './NotionUserRepository';
import { FileUserRepository } from './FileUserRepository';

export class RepositoryFactory {
    static createUserRepository(type: 'notion' | 'file'): IUserRepository {
        if (type === 'notion') {
            return new NotionUserRepository();
        } else {
            return new FileUserRepository();
        }
    }
}