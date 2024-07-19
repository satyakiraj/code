class BankAccount{
    constructor(account_number, balance){
      this.account_number = account_number;
      this.balance = balance;
    }
  withdraw(amount){
    if(amount > this.balance){
        console.log("not possible")
    }
    else{
        console.log(`Current balance is $${this.balance}`)
        this.balance -= amount;
        console.log(`Amount withdrawn $${amount}. New balance $${this.balance}`)
    }
  }
   deposit(amount){
      this.balance += amount;
      console.log(`New balance ${this.balance}`)
   }
}
const account1 = new BankAccount(23, 5500);
account1.withdraw(5500);