// src/domain/Debt.ts

export class Debt {
    constructor(
        private id: string,
        private amount: number,
        private creditor: string,
        private debtor: string,
        private dueDate: Date
    ) { }

    public getId(): string {
        return this.id;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getCreditor(): string {
        return this.creditor;
    }

    public getDebtor(): string {
        return this.debtor;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    isOverdue(): boolean {
        return new Date() > this.dueDate;
    }
}