import BankingSystem from "./banking_system"
export default class BankAccount extends BankingSystem {
    constructor(name, balance) {
        this._name = name
        this._balance = balance || 0
        this._no_rek = Date.now()
    }
}