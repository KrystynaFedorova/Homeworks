let firstX = prompt('x1 ', '')
let firstY = prompt('y1 ', '')
let secondX = prompt('x2', '')
let secondY = prompt('y2', '')

if (Number(firstX) >= 1 && Number(firstX) <= 8
    && Number(firstY) >= 1 && +Number(firstY) <= 8
    && Number(secondX) >= 1 && Number(secondX) <= 8
    && Number(secondY) >= 1 && Number(secondY) <= 8) {
    if (+firstX + 2 === Number(secondX) && Number(firstY) + 1 === Number(secondY)) {
        alert('true')
    } else if (Number(firstX) + 2 === Number(secondX) && Number(firstY) - 1 === Number(secondY)) {
        alert('true')
    } else if (Number(firstX) - 2 === Number(secondX) && Number(firstY) +1 === Number(secondY)) {
        alert('true')
    } else if (Number(firstX) - 2 === Number(secondX) && Number(firstY) - 1 === Number(secondY)) {
        alert('true')
    } else if (Number(firstY) + 2 === Number(secondY) && Number(firstX) + 1 === Number(secondX)) {
        alert('true')
    } else if (Number(firstY) + 2 === Number(secondY) && Number(firstX) - 1 === Number(secondX)) {
        alert('true')
    } else {
        alert('false')
    }
} else {
    alert('no')
}