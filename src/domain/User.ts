import { Account } from './Account';

export class User {
    id: string;
    name: string;
    accounts: Account[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    addAccount(account: Account): void {
        this.accounts.push(account);
    }

    getAccounts(): Account[] {
        return this.accounts;
    }

    getDebts(): any[] {
        // Логика для получения долгов
        return [];
    }

    addDebt(debt: any): void {
        // Логика для добавления долга
    }
}