// src/services/AccountService.ts

import { Account } from '../domain/Account';
import { AccountRepository } from '../infrastructure/repositories/AccountRepository';

export class AccountService {
    userService: any;
    constructor(private accountRepository: AccountRepository) { }

    public createAccount(name: string, balance: number, currency: string): Account {
        const account = new Account(this.generateId(), name, balance, currency);
        this.accountRepository.save(account);
        return account;
    }

    public getAccountBalance(accountId: string): number {
        const account = this.accountRepository.find(accountId);
        return account ? account.getBalance() : 0;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}