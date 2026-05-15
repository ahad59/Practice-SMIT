class Atm {
    private balance: number;
    private pin: number;
    name: string;
    cardnumber: number;

    constructor(name: string, cardnumber: number, initialbalance: number, pin: number) {
        this.name = name;
        this.cardnumber = cardnumber;
        this.balance = initialbalance;
        this.pin = pin;
    }

    private validPin (enteredPin: number): boolean {
        if (enteredPin === this.pin) {
            return true;
        }
        else {
            console.log("You have entered incorrect pin.");
            return false;
        }
    }

    deposit (enteredPin: number, amount: number): void {
        if(!this.validPin(enteredPin)) {
            return;
        }
        if (amount <= 0) {
            console.log("You must deposit amount more than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Rs. ${amount} depositted successfully.`);
    }

    withdraw (enteredPin: number, amount: number): void {
        if(!this.validPin(enteredPin)) {
            return;
        }
        if(amount <= 0) {
            console.log("You must withdraw amount more than zero.");
            return;
        }
        if(amount > this.balance) {
            console.log("Insufficient balance. Your current Balance is: Rs. ${this.balance}");
            return;
        }

        this.balance -= amount;
        console.log(`Rs. ${amount} withdrawn successfully.`);
    }

    checkBalance (enteredPin: number): void {
        if(!this.validPin(enteredPin)) {
            return;
        }

        console.log(`${this.name}'s Balance is Rs. ${this.balance}`);
    }

    changePin (enteredPin: number, newPin: number) {
        if(!this.validPin(enteredPin)) {
        return;
    }

    if(newPin <= 0) {
        console.log("Invalid Pin your pin must be greater than zero.");
        return;
    }

    if (enteredPin === newPin) {
        console.log("New pin and the old pin cannot be same.");
        return;
    }

    this.pin = newPin;
    console.log(`Pin changed successfully for ${this.name}'s account.`);
}
    getCardDetails (): void {
        console.log(`Card Holder: ${this.name} | Card Number: ${this.cardnumber} | Balance: ${this.balance}`);
    }
}

console.log("-----ATM cards----");
const atm1 = new Atm ("Huraira", 429922321, 900, 5992);
const atm2 = new Atm ("Hadia", 592019421, 20000, 318860);

console.log("\n-----Card Details----");
atm1.getCardDetails();
atm2.getCardDetails();

console.log("\n-----Check Balance-----");
atm1.checkBalance(5992);
atm2.checkBalance(318869);

console.log("\n-----Deposit Money-----");
atm1.deposit(5992, 2000);
atm2.deposit(318660, 30000);

console.log("\n----Withdraw Money----");
atm1.withdraw(5992, 1000);

console.log("\n----Change Pin----");
atm2.changePin(318860, 68047);

console.log("\n----Testing the New Changed Pin.----");
atm2.checkBalance(68047);

console.log("\n-----Final Details of card-----");
atm2.getCardDetails();
atm1.getCardDetails();

