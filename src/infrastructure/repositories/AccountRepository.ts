import { Account } from '../../domain/Account';
import { IAccountRepository } from '../../domain/contracts/IAccountRepository';

export class AccountRepository implements IAccountRepository {
    private accounts: Account[] = [];

    find(id: string): Account | null {
        const account = this.accounts.find(account => account.id === id);
        return account || null;
    }

    save(account: Account): void {
        this.accounts.push(account);
    }

    update(id: string, account: Account): void {
        const index = this.accounts.findIndex(acc => acc.id === id);
        if (index !== -1) {
            this.accounts[index] = account;
        }
    }
}