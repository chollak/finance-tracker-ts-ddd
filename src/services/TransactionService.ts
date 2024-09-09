import { Account } from '../domain/Account';
import { Transaction } from '../domain/Transaction';
import { AccountRepository } from '../infrastructure/repositories/AccountRepository';
import { AccountService } from './AccountService';

export class TransactionService {
    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService(new AccountRepository());
    }

    createTransaction(transactionId: string, amount: number, category: string, accountId: string, userId: string): Transaction {
        const user = this.accountService.userService.userRepo.find(userId);
        if (!user) {
            throw new Error('User not found');
        }

        const account = user.accounts.find((acc: Account) => acc.id === accountId);
        if (!account) {
            throw new Error('Account not found');
        }

        const transaction = new Transaction(transactionId, amount, category, account.id, "Some description", new Date());
        account.debit(amount);
        this.accountService.userService.userRepo.update(userId, user);
        return transaction;
    }
}