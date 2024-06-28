import BankAccount from "./bank_account";

// Buat sebuah fungsi yg meminta user memilih tipe operasi
function init() {
    const temp = new BankAccount()
}

function saveStorage(obj) {
    localStorage.setItem("Bank Account", [...localStorage.getItem("Bank Account"), obj])
}