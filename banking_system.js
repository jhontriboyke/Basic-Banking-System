import { random_time } from "./utils/random.js"
import { is_a_number, bare_minimum } from "./utils/input_validation.js" 

class BankingSystem {
    constructor(balance) {
        this._balance = balance || 0
    }
    
    deposit(amount) {
        try {
            // Validasi
            is_a_number(amount)
            bare_minimum(amount, 10_000, "deposit")
            console.log("Loading...")

            new Promise(resolve => {
                setTimeout(() => {
                    this._balance += amount
                    console.log(`Deposit success. Your balance: ${this._balance}`)
                    resolve()
                }, random_time())
            })
        } catch (error) {
            console.log(error, error.message)
        }
    }

    withdraw(amount) {
        try {
            // Validasi
            is_a_number(amount)
            bare_minimum(amount, 10_000, "withdraw")

            console.log("Loading...")

            // Check nilai balance terhadap amount
            if (amount > this._balance) {
                throw new RangeError(`You maximum withdraw is ${this._balance}`)
            }

            new Promise((resolve) => {
                setTimeout(() => {
                    this._balance -= amount
                    console.log(`Withdraw success. Your balance: ${this._balance}`)
                    resolve()
                }, random_time())
            })
        } catch (error) {
            console.log(error, error.message)
        }
    }
}

export default BankingSystem;