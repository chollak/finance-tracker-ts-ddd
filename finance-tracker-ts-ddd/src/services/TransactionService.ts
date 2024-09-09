import { Transaction } from '../domain/Transaction';
import { AccountService } from './AccountService';

export class TransactionService {
    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    createTransaction(transactionId: string, amount: number, category: string, accountId: string, userId: string): Transaction {
        const user = this.accountService.userService.userRepo.find(userId);
        if (!user) {
            throw new Error('User not found');
        }

        const account = user.accounts.find(acc => acc.id === accountId);
        if (!account) {
            throw new Error('Account not found');
        }

        const transaction = new Transaction(transactionId, amount, category, account);
        account.debit(amount);
        this.accountService.userService.userRepo.update(userId, user);
        return transaction;
    }
}