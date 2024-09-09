// src/repositories/NotionRepository.ts

import { User } from '../../domain/User';
import { Client } from '@notionhq/client';
import { IUserRepository } from '../../domain/contracts/IUserRepository';

export class NotionRepository implements IUserRepository {
    private notion: Client;

    constructor() {
        this.notion = new Client({ auth: process.env.NOTION_API_KEY });
    }

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

    public async save(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async find(id: string): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
}