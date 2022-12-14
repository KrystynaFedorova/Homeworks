const input = $('#name-selector-input')
const clearBtn = $('#clear-btn')

const previousBtn = $('#previous-btn')
const nextBtn = $('#next-btn')
const parentBtn = $('#parent-btn')
const firstBtn = $('#first-btn')
const lastBtn = $('#last-btn')
let seekedElement = null;

function clearAll() {
    const highlightedElements = $('.highlight')
    highlightedElements.removeClass('highlight')
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

function toggleBtnStyle(selector, btn) {
    if (seekedElement[selector]) {
        btn.disabled = false
        btn.removeClass('disabled')
        btn.addClass('active')
    } else {
        btn.disabled = true
        btn.removeClass('active')
        btn.addClass('disabled')
    }
}

function resetBtnStyle() {
    toggleBtnStyle('previousElementSibling', previousBtn)
    toggleBtnStyle('nextElementSibling', nextBtn)
    toggleBtnStyle('parentElement', parentBtn)
    toggleBtnStyle('firstElementChild', firstBtn)
    toggleBtnStyle('lastElementChild', lastBtn)
}

input.on('input', function () {
 seekedElement = document.querySelector(this.value)
    if (seekedElement) {
        resetBtnStyle();
        clearAll();
        seekedElement.classList.add('highlight')
    }
});
clearBtn.click(function () {
    input.val(null)
    clearAll()
})

previousBtn.click(function () {
    findElement('previousElementSibling')
    resetBtnStyle()
})
nextBtn.click(function () {
    findElement('nextElementSibling')
    resetBtnStyle()
})
parentBtn.click(function () {
    findElement('parentElement')
    resetBtnStyle()
})
firstBtn.click(function () {
    findElement('firstElementChild')
    resetBtnStyle()
})
lastBtn.click(function () {
    findElement('lastElementChild')
    resetBtnStyle()
})

