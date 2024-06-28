import { random_time } from "./utils/random.js"

class BankingSystem {
    constructor(balance) {
        this._balance = balance || 0
    }

    deposit(amount) {
            return new Promise(resolve => {
                setTimeout(() => {
                    this._balance += amount
                    console.log(`Deposit success. Your balance: ${this._balance}`)
                    resolve()
                }, random_time())
            })
    }

    withdraw(amount) {
           return new Promise((resolve, reject) => {
                if (amount > this._balance) {
                    reject(new Error(`You maximum withdraw is ${this._balance}`))
                    console.log("Terminated!")
                    return
                }
                setTimeout(() => {
                    this._balance -= amount
                    console.log(`Withdraw success. Your balance: ${this._balance}`)
                    resolve()
                }, random_time())
            })
        } 
}

export default BankingSystem;