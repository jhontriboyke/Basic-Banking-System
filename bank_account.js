import BankingSystem from "./banking_system.js"

export default class BankAccount extends BankingSystem {
    constructor(balance) {
        super(balance)
        this._no_rek = Date.now()
    }
}