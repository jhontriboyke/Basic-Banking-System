const infoSaldo = document.getElementById("infoSaldo")
const tambahSaldoButton = document.getElementById("tambahSaldo")
const kurangSaldoButton = document.getElementById("kurangSaldo")

let saldo = 0;

infoSaldo.textContent = saldo

tambahSaldoButton.addEventListener("click", () => {
    let saldoBaru = cekInput('increase')
    if (saldoBaru) {
        tambahSaldo(saldoBaru)
    }
})

kurangSaldoButton.addEventListener("click", () => {
    if (saldo == 0 ) {
        alert("Saldo anda kosong")
        return
    }

    let saldoBaru = cekInput('decrease')
    if (saldoBaru) {
        kurangSaldo(saldoBaru)
    }
})

function tambahSaldo(newSaldo) {
    let saldoSebelumnya = saldo
    if (newSaldo <= 0) {
        alert("Tidak ada penambahan saldo")
    } else {
        saldo += newSaldo
        infoSaldo.textContent = saldo
        alert(`Saldo anda bertambah dari ${saldoSebelumnya} sebesar ${newSaldo} menjadi ${saldo}`)
    }
}

function kurangSaldo(newSaldo) {
    let saldoSebelumnya = saldo
    if (newSaldo <= 0) {
        alert("Tidak ada pengurangan saldo")
    } else {
        saldo -= newSaldo
        if (saldo <= 0) {
            saldo = 0
            infoSaldo.textContent = saldo
            alert("Saldo anda habis!")
        } else {
            infoSaldo.textContent = saldo
            alert(`Saldo anda berkurang dari ${saldoSebelumnya} sebesar ${newSaldo} menjadi ${saldo}`)
        }

    }
}
// Pastikan input merupakan angka
// Jika tidak, maka tampilkan pesan err
function cekInput(mode) {
    let inputSaldo = +prompt(`Masukan jumlah saldo yang ingin anda ${mode == 'increase' ? 'tambah' : 'kurangi'}`)
    if (isNaN(inputSaldo)) {
        alert("Harap masukkan angka yang benar")
    } else {
        return inputSaldo
    }
}


/*
    Future Update
    - ??
*/