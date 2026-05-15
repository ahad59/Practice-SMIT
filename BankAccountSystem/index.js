"use strict";
class BankAccount {
    balance;
    name;
    accountnumber;
    constructor(name, accountnumber, initialbalance) {
        this.name = name;
        this.accountnumber = accountnumber;
        this.balance = initialbalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Rs. ${amount} deposited successfully.`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log(`Insufficient balance. Your current balance is Rs. ${this.balance}`);
            return;
        }
        this.balance -= amount;
        console.log(`Rs. ${amount} withdrawn successfully.`);
    }
    checkBalance() {
        console.log(`${this.name}'s current Balance is: Rs. ${this.balance} `);
    }
    getAccountDetails() {
        console.log(`Account holder: ${this.name} | Account Number: ${this.accountnumber} | Balance: Rs. ${this.balance}`);
    }
}
console.log("====Creating Accounts=====");
const account1 = new BankAccount("Ali", 11199000, 5000);
const account2 = new BankAccount("Raza", 430022110, 10000);
console.log("\n====Account Details=====");
account1.getAccountDetails();
console.log("\n====Check Balance====");
account2.checkBalance();
console.log("\n====Deposit Money====");
account1.deposit(5000);
console.log("\n====Withdraw Amount=====");
account2.withdraw(2000);
console.log("\n======Final Balance====");
account2.checkBalance();
