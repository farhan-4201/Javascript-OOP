// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const rect = new Rectangle(5.5, 6.5);
// const rec = new Rectangle(6.5, 7.5);
// console.log(rec.calcArea())
// console.log(rect.calcArea()); 

// class Rectangle{
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
//     Area(){
//         return this.height*this.width;
//     }
//     Perimeter(){
//         return 2*(this.height+this.width)
//     }
// }
// const r=new Rectangle(10,5)
// console.log(r.Area())
// console.log(r.Perimeter())

// class BankAccount {
//   #accountno;
//   #balance;

//   constructor(accountno, balance) {
//     this.#accountno = accountno;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   get balance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount("ACC123", 5000);
// acc.deposit(500);

// console.log(acc.balance); // ✅ Output: 5500

// console.log(acc.#balance)
class Employee{
    constructor(name){
        this.name=name;
    }
    getrole(){
    return `${this.name} Employee`
    }
}
class Manager extends Employee{
    getrole(){
        super.getrole();
            return `${this.name} Manager (employee)`        
    }
}
const e = new Employee("Ali");
const m = new Manager("Sara");
console.log(e.getrole()); // Employee
console.log(m.getrole());