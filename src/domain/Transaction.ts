// src/domain/Transaction.ts
export class Transaction {
  private readonly id: string;
  private amount: number;
  private categoryId: string;
  private accountId: string;
  private description: string;
  private date: Date;

  constructor(
    id: string,
    amount: number,
    categoryId: string,
    accountId: string,
    description: string,
    date: Date
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.categoryId = categoryId;
    this.accountId = accountId;
  }

  public isValidTransaction(): boolean {
    return this.amount > 0;
  }

  public updateAmount(newAmount: number): void {
    this.amount = newAmount;
  }

  // Другие бизнес-правила и методы
}