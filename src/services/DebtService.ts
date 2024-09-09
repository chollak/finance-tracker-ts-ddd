import { Debt } from '../domain/Debt';
import { UserService } from './UserService';
import { UserRepository } from '../infrastructure/repositories/UserRepository';

export class DebtService {
    userService: UserService;

    constructor() {
        this.userService = new UserService(new UserRepository());
    }

    createDebt(userId: string, debtId: string, amount: number, creditor: string, debtor: string, dueDate: Date): void {
        const debt = new Debt(debtId, amount, creditor, debtor, dueDate);
        this.userService.addUserDebt(userId, debt);
    }
}