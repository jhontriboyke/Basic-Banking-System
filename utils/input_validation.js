
// membuat kelas CustomError extends dari class Error
class CustomError extends Error {
    constructor(name, message) {
        super(message)
        this.name = name
    }
}

// Apakah num sebuah angka ?
export const is_a_number = (num) => {
    if (typeof(num) === 'number' || isNaN(num)) {
        throw new TypeError("Please input a valid number")
    }
}

// Apakah num bernilai positif ?
export const is_positive = (num) => {
    if (num <= 0) {
        throw new RangeError("The number must be positive or more than 0")
    }
}

// Apakah num lebih dari batas min
export const bare_minimum = (num, min, type) => {
    if (num < 0) {
        throw new RangeError(`Mininum ${type} is ${min}`)
    }
}