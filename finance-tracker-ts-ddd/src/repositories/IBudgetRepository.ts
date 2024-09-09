import { Budget } from '../domain/Budget';

export interface IBudgetRepository {
    find(id: string): Budget | null;
    save(budget: Budget): void;
    update(id: string, budget: Budget): void;
}