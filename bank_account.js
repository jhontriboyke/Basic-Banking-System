import BankingSystem from "./banking_system.js"
import { is_a_number, bare_minimum } from "./utils/input_validation.js" 

export default class BankAccount extends BankingSystem {
    constructor(balance) {
        super(balance)
        this._no_rek = Date.now()
    }

    getBalance() {
        return this._balance
    }

    async deposit(amount) {
        try {
            // Validasi
            is_a_number(amount)
            bare_minimum(amount, 10_000, "deposit")
            console.log("Loading...")

            await super.deposit(amount)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async withdraw(amount) {
        try {
            is_a_number(amount)
            bare_minimum(amount, 10_000, "withdraw")
            console.log("Loading...")

            await super.withdraw(amount)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}