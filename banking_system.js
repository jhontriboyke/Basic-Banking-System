class BankAccount {
    constructor(balance) {
        this._no_rek = Date.now()
        this._balance = balance || 0
    }

    // Fungsi random detik dari 1s - 3s
    #randomTime() {
        return (Math.floor(Math.random() * 3) + 1) * 1000
    }

    #checkNum(num) {
        if(isNaN(num)) throw new Error("Please enter a valid number")
    }

    #bareMininum(num, minNum, type) {
        if(num < minNum) throw new RangeError(`Minimum ${type} is ${minNum}`)
    }

    get balance() {
        return this._balance
    }

    set deposit(amount) {
        try {
            // Validasi
            this.#checkNum(amount)
            this.#bareMininum(amount, 10_000, "deposit")
            console.log("Loading...")

            new Promise(resolve => {
                setTimeout(() => {
                    this._balance += amount
                    console.log(`Deposit success. Your balance: ${this._balance}`)
                    resolve()
                }, this.#randomTime())
            })
        } catch (error) {
            console.log(error, error.message)
        }
    }

    set withdraw(amount) {
        try {
            // Validasi
            this.#checkNum(amount)
            this.#bareMininum(amount, 10_000, "withdraw")
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
                }, this.#randomTime())
            })
        } catch (error) {
            console.log(error, error.message)
        }
    }
}


// Test 1
const account1 = new BankAccount(10_000)
account1.deposit = 20000