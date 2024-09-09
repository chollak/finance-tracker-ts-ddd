import { Budget } from '../domain/Budget';
import { Account } from '../domain/Account';

export class BudgetService {
    private budget: Budget;

    constructor(budget: Budget) {
        this.budget = budget;
    }

    setAccountLimit(account: Account, limit: number): void {
        this.budget.setAccountLimit(account, limit);
    }

    checkAccountLimit(account: Account, amount: number): boolean {
        return this.budget.checkAccountLimit(account, amount);
    }
}