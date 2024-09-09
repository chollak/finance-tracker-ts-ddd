// src/repositories/NotionRepository.ts

import { User } from '../domain/User';
import { Client } from '@notionhq/client';
import { IUserRepository } from './IUserRepository';

export class NotionRepository implements IUserRepository {
    private notion: Client;

    constructor() {
        this.notion = new Client({ auth: process.env.NOTION_API_KEY });
    }

    public async save(user: User): Promise<void> {
        await this.notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID as string },
            properties: {
                Name: {
                    title: [{ text: { content: user.getName() } }],
                },
                Id: {
                    rich_text: [{ text: { content: user.getId() } }],
                },
                Accounts: {
                    multi_select: user.getAccounts().map(account => ({ name: account.getName() })),
                },
                Debts: {
                    multi_select: user.getDebts().map(debt => ({ name: debt.getId() })),
                },
            },
        });
    }

    public async find(id: string): Promise<User | null> {
        const response = await this.notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID as string,
            filter: {
                property: 'Id',
                text: { equals: id },
            },
        });

        if (response.results.length === 0) return null;

        const page = response.results[0];
        const name = (page.properties.Name as any).title[0].text.content;

        return new User(id, name);
    }
}