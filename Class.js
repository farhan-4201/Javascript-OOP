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
// class Employee{
//     constructor(name){
//         this.name=name;
//     }
//     getrole(){
//     return `${this.name} Employee`
//     }
// }
// class Manager extends Employee{
//     getrole(){
//         super.getrole();
//             return `${this.name} Manager (employee)`        
//     }
// }
// const e = new Employee("Ali");
// const m = new Manager("Sara");
// console.log(e.getrole()); // Employee
// console.log(m.getrole());

// class Book {
//     Book;
//     title;
//     author;
//     #isavailable;
//     constructor(Book,title,author){
//         this.Book=Book;
//         this.title=title;
//         this.author=author;
//     }
//     borrowbook(Book){
//         return this.#isavailable=false;
//     }
//     returnbook(Book){
//         return this.#isavailable=true;
//     }
//     getavailaibilitystatus(Book){
//         return this.#isavailable;
//     }
// }

// class User {
//     name;
//     constructor(name){
//         this.name=name;
//         this.borrowedBook=[];
//     }
//     borrow(Book){
//         this.borrowedBook.push(Book);
//     }
//     return(Book){
//         this.borrowedBook = this.borrowedBook.filter(b => b.title !== Book.title)
//     }
// }

// class Library{
//     static totalbooks ;
//     constructor(totalbooks){
//         this.totalbooks=totalbooks;
//         this.books = [];
//     }


// }

// 📘 Book Class
class Book {
  #isAvailable = true; // private field

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  borrowBook() {
    if (!this.#isAvailable) {
      console.log(`❌ "${this.title}" is already borrowed.`);
      return false;
    }
    this.#isAvailable = false;
    console.log(`✅ You borrowed "${this.title}"`);
    return true;
  }

  returnBook() {
    this.#isAvailable = true;
    console.log(`🔁 You returned "${this.title}"`);
  }

  getAvailabilityStatus() {
    return this.#isAvailable;
  }
}
// 👤 User Class
class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (book.borrowBook()) {
      this.borrowedBooks.push(book);
      console.log(`👤 ${this.name} borrowed "${book.title}"`);
    }
  }

  return(book) {
    const index = this.borrowedBooks.findIndex(b => b.title === book.title);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
      console.log(`👤 ${this.name} returned "${book.title}"`);
    } else {
      console.log(`⚠️ ${this.name} did not borrow "${book.title}"`);
    }
  }

  listBorrowedBooks() {
    console.log(`📚 ${this.name}'s Borrowed Books:`);
    this.borrowedBooks.forEach(book => {
      console.log(`- ${book.title}`);
    });
  }
}
// 🏛️ Library Class
class Library {
  constructor() {
    this.books = [];
  }

  static totalBooks = 0;

  addBook(book) {
    this.books.push(book);
    Library.totalBooks++;
    console.log(`📘 "${book.title}" added to the library.`);
  }

  listAvailableBooks() {
    const available = this.books.filter(book => book.getAvailabilityStatus());
    if (available.length === 0) {
      console.log("📕 No books available at the moment.");
      return;
    }
    console.log("📗 Available Books:");
    available.forEach(book => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  }

  findBook(title) {
    return this.books.find(book => book.title === title);
  }
}
// Create Library
const myLibrary = new Library();

// Create Books
const book1 = new Book("Clean Code", "Robert C. Martin");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke");
const book3 = new Book("The Pragmatic Programmer", "Andrew Hunt");

// Add Books to Library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Show Available Books
myLibrary.listAvailableBooks();

// Create User
const farhan = new User("Farhan");

// Borrow a Book
farhan.borrow(book1);
farhan.borrow(book2);

// List Borrowed Books
farhan.listBorrowedBooks();

// Show Available Books after borrowing
myLibrary.listAvailableBooks();

// Return a Book
farhan.return(book1);

// List Available again
myLibrary.listAvailableBooks();

// Show Total Book Count
console.log(`📊 Total books in library: ${Library.totalBooks}`);
