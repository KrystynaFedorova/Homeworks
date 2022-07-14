// Написати функцію, яка отримує 3 аргументи: два числа та функцію.
//     Здійснити виклик переданої функції із двома аргументами числами і повернути результат.
// Функція (назвіть її quotient), що буде передаватись в якості аргументу,
// має розраховувати неповну частку від ділення (по іншому називається цілочисельне ділення)
// та повертати результат виконання.


function doFunction(a,b,quotient){
return quotient(a,b)
}
function quotient1(a,b){
     return Math.trunc(a/b)
    }
function quotient2(a,b){
    return (String(a/b)).split('.')[0]
}
let a=-8
let b=5
console.log("Math.trunc "+doFunction(a,b,quotient1))
console.log("Разделением дроби, как строки "+doFunction(a,b,quotient2))
