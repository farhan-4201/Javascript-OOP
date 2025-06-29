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
class SavingsAccount extends BankAccount{
    interestRate;
    constructor(accountNumber,accountHolder,initialbalance,interestRate){
        super(accountNumber,accountHolder,initialbalance);
        this.interestRate=interestRate;
    }
    withdraw(amount){
        if(amount > this.getbalance()){
            console.log(`Cannot withdraw ${amount}`)
        }else{
             super.withdraw(this.amount);
        }

    }
    addInterest(interestRate){
        const current = this.getbalance();
        const interest = current * this.interestRate;
        this.deposit(interest);
        console.log(`interest ${interest} added`)
        this.interestRate=interestRate;  
    }
}

class CurrentAccount extends BankAccount{
    constructor(accountNumber,accountHolder,initialbalance,limit){
        super(accountNumber,accountHolder,initialbalance);
        this.limit=limit;
    }
    withdraw(amount){
        const currentbalance = this.getbalance() - amount;
        if(currentbalance < -this.limit){
            console.log(`Cannot withdraw`)
        }
        else
        {
            super.withdraw(amount);
            console.log(`withdraw ${amount} successfull Current balance is ${currentbalance}`)
        }
    }
}

class Bank{
    static totalAccounts = 0;
    addAccount(account){
    this.account=account;
    totalAccounts++;
    return `${account} created successfully`;
    }

    getAccount(accountNumber){
    this.accountNumber=accountNumber;
   }

    listAllAccounts(){
    console.log(`Accounts So far :${totalAccounts}` )
   }
}

// Create bank
const myBank = new Bank();

// Create accounts
const savings = new SavingsAccount(101, "Farhan", 10000, 0.05);
const current = new CurrentAccount(102, "Usman", 2000, 3000);

// Add accounts to bank
myBank.addAccount(savings);
myBank.addAccount(current);

// Savings Account actions
savings.deposit(5000);       // 15000
savings.withdraw(2000);      // 13000
savings.withdraw(20000);     // ❌ Overdraft
savings.addInterest();       // +5%

// Current Account actions
current.withdraw(1000);      // 1000 left
current.withdraw(4000);      // -3000 OK
current.withdraw(1000);      // ❌ Exceeds overdraft

// List accounts
myBank.listAllAccounts();
