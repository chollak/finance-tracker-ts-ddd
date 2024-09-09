export class Account {
    id: string;
    name: string;
    balance: number;
    currency: string;

    constructor(id: string, name: string, balance: number, currency: string) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.currency = currency;
    }

    credit(amount: number): void {
        this.balance += amount;
    }

    debit(amount: number): void {
        if (amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amount;
    }
}