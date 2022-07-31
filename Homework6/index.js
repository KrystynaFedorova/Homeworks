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
    seekedElement = seekedElement[selector]
    seekedElement.classList.add('highlight')
    clearAll()

}

function toggleBtnStylePrev() {
    if (seekedElement.previousElementSibling) {
        previousBtn.disabled = false
        previousBtn.classList.add('active')
    } else {
        previousBtn.disabled = true
        previousBtn.classList.add('disabled')
    }
}

function toggleBtnStyleNext() {
    if (seekedElement.nextElementSibling) {
        nextBtn.disabled = false
        nextBtn.classList.add('active')
    } else {
        nextBtn.disabled = true
        nextBtn.classList.add('disabled')
    }
}

function toggleBtnStyleParent() {
    if (seekedElement.parentElement) {
        parentBtn.disabled = false
        parentBtn.classList.add('active')
    } else {
        parentBtn.disabled = true
        parentBtn.classList.add('disabled')
    }
}

function toggleBtnStyleFirstChild() {
    if (seekedElement.firstElementChild) {
        firstBtn.disabled = false
        firstBtn.classList.add('active')
    } else {
        firstBtn.disabled = true
        firstBtn.classList.add('disabled')
    }
}

function toggleBtnStyleLastChild() {
    if (seekedElement.lastElementChild) {
        lastBtn.disabled = false
        lastBtn.classList.add('active')
    } else {
        lastBtn.disabled = true
        lastBtn.classList.add('disabled')
    }
}


input.addEventListener('input', function () {
    seekedElement = document.querySelector(this.value)
    if (seekedElement) {
        toggleBtnStylePrev()
        clearAll()
        seekedElement.classList.add('highlight')
    }
})

clearBtn.addEventListener('click', clearInput)

previousBtn.addEventListener('click', function () {
    findElement('previousElementSibling')
    toggleBtnStylePrev()
})

nextBtn.addEventListener('click', function () {
    findElement('nextElementSibling')
    toggleBtnStyleNext()
})
parentBtn.addEventListener('click', function () {
    findElement('parentElement')
    toggleBtnStyleParent()
})
firstBtn.addEventListener('click', function () {
    findElement('firstElementChild')
    toggleBtnStyleFirstChild()
})
lastBtn.addEventListener('click', function () {
    findElement('lastElementChild')
    toggleBtnStyleLastChild()
})

