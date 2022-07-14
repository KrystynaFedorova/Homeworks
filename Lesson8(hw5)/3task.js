// Написати функцію, яка приймає один аргумент.
//     При першому виклику, вона його запам'ятовує,
// при другому - підсумовує переданий аргумент з тим, що передали вперше і т.д.
//     Все це із замиканнями, наприклад:
// sum(3) -> 3
// sum(5) -> 8
// sum(20) -> 28


let a

function sum(x) {
    a = x
    return function (x) {
        a += x
        return a
    }
}

let summary = sum(0)
console.log(summary(3))
console.log(summary(5))
console.log(summary(20))
