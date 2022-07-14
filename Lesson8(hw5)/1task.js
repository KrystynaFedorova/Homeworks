// Використовуючи рекурсію знайти максимальний елемент масиву arr.
//     Використовувати цикли заборонено.
//     Необов'язково можете додатково зробити функцію, яка рахує факторіал від числа.
arr = [1, 3, 5, 12, 7, 9]
console.log(arr)
let max = arr[0]

function maxNumber(arr, i) {
    if (arr.length <= 0) {
        return console.log("Массив пустой")
    }
    if (arr[i] > max) {
        max = arr[i]
    }
    if (i === arr.length) {
        return console.log("Максимальное число: " + max)
    }
    i++
    return maxNumber(arr, i)
}

maxNumber(arr, 0)


let a = 1

function factorial(number) {
    if (number <= 0) {
        return console.log("Факториал числа равен " + a)
    }
    a = number * a

    return factorial(number - 1)
}

factorial(5)






















