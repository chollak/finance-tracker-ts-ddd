// src/repositories/RepositoryFactory.ts
import { NotionUserRepository } from './NotionUserRepository';
import { FileUserRepository } from './FileUserRepository';
import { IUserRepository } from '../../domain/contracts/IUserRepository';

export class RepositoryFactory {
    static createUserRepository(type: 'notion' | 'file'): IUserRepository {
        if (type === 'notion') {
            return new NotionUserRepository();
        } else {
            return new FileUserRepository();
        }
    }
}