let result;

function iterator() {
    let enterNum = "Введіть число: "
    return enterNum
}

function* numberGuess(result) {
    let userNum = yield iterator()
    while (userNum !== result) {
        userNum = yield userNum > result ? `Менше, ніж ${userNum}` : `Більше, ніж ${userNum}`;
    }
    return `Ви вгадали, це ${userNum}`
}

const guessIterator = numberGuess(5)
do {
    const userNum = parseInt(prompt("Введіть число"))
    result = guessIterator.next(userNum)
    console.log(result.value)

} while (result.done === false)
