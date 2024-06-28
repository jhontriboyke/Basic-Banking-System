import BankAccount from "./bank_account.js";

// Inisialisasi DOM
const balance = document.getElementById("balance")
const deposit_btn = document.getElementById("deposit_btn")
const withdraw_btn = document.getElementById("withdraw_btn")

const account = new BankAccount()



deposit_btn.addEventListener("click", async () => {
    const num = getInput("Enter amount for deposit")
    try {
        await account.deposit(num)
        balance.textContent = account.getBalance()
    } catch (error) {
        alert(error.message)
    }
})

withdraw_btn.addEventListener("click", async () => {
    const num = getInput("Enter amount for withdraw")
    try {
        await account.withdraw(num)
        balance.textContent = account.getBalance()
    } catch (error) {
        alert(error.message)
    }
})

function getInput(message) {
    return +prompt(message, 0)
}