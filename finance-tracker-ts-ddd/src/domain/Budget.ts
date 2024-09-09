import { Account } from './Account';

export class Budget {
    id: string;
    category: string;
    limit: number;
    spent: number = 0;

    constructor(id: string, category: string, limit: number) {
        this.id = id;
        this.category = category;
        this.limit = limit;
    }

    setAccountLimit(account: Account, limit: number): void {
        if (this.spent + limit > this.limit) {
            throw new Error('Budget limit exceeded');
        }
        this.spent += limit;
    }

    checkAccountLimit(account: Account, amount: number): boolean {
        return this.spent + amount <= this.limit;
    }
}