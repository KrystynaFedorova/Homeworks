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

function toggleBtnStyle (selector, btn) {
    if (seekedElement[selector]) {
        btn.disabled = false
        btn.classList.remove('disabled')
        btn.classList.add('active')
    } else {
        btn.disabled = true
        btn.classList.remove('active')
        btn.classList.add('disabled')
    }
}
function resetBtnStyle() {
    toggleBtnStyle('previousElementSibling', previousBtn)
    toggleBtnStyle('nextElementSibling', nextBtn)
    toggleBtnStyle('parentElement', parentBtn)
    toggleBtnStyle('firstElementChild', firstBtn)
    toggleBtnStyle('lastElementChild', lastBtn)
}


input.addEventListener('input', function(e) {
    seekedElement = document.querySelector(this.value)
    if (seekedElement) {
        resetBtnStyle();
        clearAll();
        seekedElement.classList.add('highlight')
    }
});
clearBtn.addEventListener('click', clearInput)

previousBtn.addEventListener('click', function () {
    findElement('previousElementSibling')
    resetBtnStyle()
})

nextBtn.addEventListener('click', function () {
    findElement('nextElementSibling')
    resetBtnStyle()
})
parentBtn.addEventListener('click', function () {
    findElement('parentElement')
    resetBtnStyle()
})
firstBtn.addEventListener('click', function () {
    findElement('firstElementChild')
    resetBtnStyle()
})
lastBtn.addEventListener('click', function () {
    findElement('lastElementChild')
    resetBtnStyle()
})

