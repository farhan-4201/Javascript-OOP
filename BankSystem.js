class BankAccount{
    accountNumber
    accountHolder
    #balance
    constructor(accountNumber,accountHolder,initialbalance){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.#balance=initialbalance;
    }
    deposit(amount){
        this.amount=amount;
        console.log(`You deposited ${this.amount}`)
        this.#balance+=this.amount;
        console.log(`Your current balance is ${this.#balance}`)
        return this.#balance;
    }
    withdraw(amount){
        this.amount=amount;
        this.#balance-=this.amount;
        console.log(`You withdraw ${this.amount}`)
        console.log(`Your current balance is ${this.#balance}`)
    }
    getbalance(){
        return this.#balance;
    }
}

const farhan = new BankAccount(123456, 'Farhan', 50000);
farhan.deposit(5000);
farhan.withdraw(300);
