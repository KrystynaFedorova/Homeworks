const input = document.getElementById('name-selector-input')
const clearBtn = document.getElementById('clear-btn')

const previousBtn = document.getElementById('previous-btn')
const nextBtn = document.getElementById('next-btn')
const parentBtn = document.getElementById('parent-btn')
const firstBtn = document.getElementById('first-btn')
const lastBtn = document.getElementById('last-btn')
let seekedElement = null

function clearAll() {
    const highlightedElements = document.getElementsByClassName('highlight')
    for (const key in highlightedElements) {
        if (Object.hasOwnProperty.call(highlightedElements, key)) {
            const element = highlightedElements[key]
            element.classList.remove('highlight')
        }
    }

}


function clearInput() {
    input.value = null
}

function findElement(selector) {
    if (seekedElement[selector] === null) {
        return 'no find'
    }
    clearAll()
    seekedElement = seekedElement[selector]
    seekedElement.classList.add('highlight')
    console.log(seekedElement)

}

function toggleBtnStyle() {
    if (seekedElement.previousElementSibling) {
        previousBtn.disabled = false
        previousBtn.classList.add('active')

    } else {
        previousBtn.disabled = true
        previousBtn.classList.add('disabled')
    }
}

input.addEventListener('input', function () {
    seekedElement = document.querySelector(this.value)
    if (seekedElement) {
        toggleBtnStyle()
        clearAll()
        seekedElement.classList.add('highlight')
    }
})

clearBtn.addEventListener('click', clearInput)

previousBtn.addEventListener('click', function () {
    findElement('previousElementSibling')
    toggleBtnStyle()
})

nextBtn.addEventListener('click', function () {
    findElement('nextElementSibling')
    toggleBtnStyle()
})
parentBtn.addEventListener('click', function () {
    findElement('parentElement')
    toggleBtnStyle()
})
firstBtn.addEventListener('click', function () {
    findElement('firstElementChild')
    toggleBtnStyle()
})
lastBtn.addEventListener('click', function () {
    findElement('lastElementChild')
    toggleBtnStyle()
})

