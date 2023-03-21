export class BudgetItem {
  public description: string = "";
  public amount: number = 0;

  constructor(description: string, amount: number) {
    this.description = description;
    this.amount = amount;
  }
}
