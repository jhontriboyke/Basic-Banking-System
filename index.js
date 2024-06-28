import BankAccount from "./bank_account.js";

// Buat sebuah fungsi yg meminta user memilih tipe operasi
function init() {
    const account = new BankAccount()
    const input = prompt("Enter your balance")
    account.deposit(input)

    
    console.log(account._balance)
}
