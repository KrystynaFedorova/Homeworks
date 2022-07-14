// Створити функцію для піднесення до степеня числа N що викликається так: power(N)(S).
//     N та S це довільні числа, з яких рахуватиметься результат.
//     Приклад power(5)(2) - Result: 25 = 5 ^ 2.
// Функція має повертати результат розрахунку


function power(N, S) {
    let pow = 1
    if (S >= 0) {
        for (let i = 0; i < S; i++) {
            pow = N * pow
        }
        console.log(pow)
    } else {
        for (let j = 0; j > S; j--) {
            pow = N * pow
        }
        console.log(1 / pow)
    }
}
power(2, -3)


function pow(n, s) {
    if (s === 0) {
        return 1
    }
    if (s > 0) {
        return (n * pow(n, s - 1))
    } else {
        // return (1 / n * pow(n, s + 1))
        return (1 / pow(n, -s))
    }
}
console.log(pow(6, -3))

