// src/domain/Transaction.ts
export class Transaction {
    private readonly id: string;
    private amount: number;
    private date: Date;
    private description: string;
    private categoryId: string;
    private accountId: string;
  
    constructor(
      id: string,
      amount: number,
      date: Date,
      description: string,
      categoryId: string,
      accountId: string
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