let operand1 = 0;
let operator = null;
let operand2 = null;

const display = document.getElementById('screen');
console.log(display)
const clearBtn = document.getElementById('clear');
const plusMinusBtn = document.getElementById('plusOrMinus');
const modulusBtn = document.getElementById('modulus');
const divideBtn = document.getElementById('divide');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const multiplyBtn = document.getElementById('multiply');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const minusBtn = document.getElementById('minus');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const plusBtn = document.getElementById('plus');
const zeroBtn = document.getElementById('zero');
const decimalBtn = document.getElementById('decimal');
const equalsBtn = document.getElementById('equals');

clearBtn.addEventListener('click', function() {
    display.textContent = 0;
})

plusMinusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

modulusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

divideBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

multiplyBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

plusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

minusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

decimalBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

equalsBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
})

zeroBtn.addEventListener('click', function() {
    if(display.textContent.startsWith(0) || display.textContent.startsWith("0")){
        display.textContent = 0
    } else {
        display.textContent = display.textContent + 0
    }
})

oneBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 1
    } else{
        display.textContent = display.textContent + 1
    }
})

twoBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 2
    } else {
        display.textContent = display.textContent + 2
    }
})

threeBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 3
    } else {
        display.textContent = display.textContent + 3
    }
})

fourBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 4
    } else {
        display.textContent = display.textContent + 4
    }
})

fiveBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 5
    } else {
        display.textContent = display.textContent + 5
    }
})

sixBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 6
    } else {
        display.textContent = display.textContent + 6
    }
})

sevenBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 7
    } else {
        display.textContent = display.textContent + 7
    }
})

eightBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 8
    } else {
        display.textContent = display.textContent + 8
    }
})

nineBtn.addEventListener('click', function() {
    if(display.textContent === 0 || display.textContent === "0"){
        display.textContent = 9
    } else {
        display.textContent = display.textContent + 9
    }
})

function clickOperatorButton(button){
    const buttons = document.querySelectorAll('button');
    
    console.log(buttons)
    console.log("Clicked: " + button)

    buttons.forEach(function(b) {
        if(b.id === button){
            b.classList.add('activeButton')
        } else {
            b.classList.remove('activeButton')
        }
    })
}

function clear(){
    display.textContent = 0
}

function plusMinus(num){

}

function modulus(num1, num2){
    
}

function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

function decimal(num){

}

function equals(){

}


function operate(operator, operand1, operand2){
    
}