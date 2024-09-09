import { Account } from '../Account';

export interface IAccountRepository {
    find(id: string): Account | null;
    save(account: Account): void;
    update(id: string, account: Account): void;
}