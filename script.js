let operand1 = "0";
let operator = "";
let operand2 = "";
let resetScreen = false;

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
    clickOperatorButton();
})

plusMinusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    setOperator("+/-")
})

modulusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    setOperator("%")
})

divideBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    setOperator("/")
    
})

multiplyBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    setOperator("*")   
})

plusBtn.addEventListener('click', function() {
    console.log(plusBtn.value)
    clickOperatorButton(this.id)
    setOperator("+")
})

minusBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    setOperator("-")
})

decimalBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    decimal()
})

equalsBtn.addEventListener('click', function() {
    clickOperatorButton(this.id)
    evaluate()
})

//Update display
zeroBtn.addEventListener('click', function() {
    appendNumber(0)
})

oneBtn.addEventListener('click', function() {
    appendNumber(1)
})

twoBtn.addEventListener('click', function() {
    appendNumber(2)
})

threeBtn.addEventListener('click', function() {
    appendNumber(3)
})

fourBtn.addEventListener('click', function() {
    appendNumber(4)
})

fiveBtn.addEventListener('click', function() {
    appendNumber(5)
})

sixBtn.addEventListener('click', function() {
    appendNumber(6)
})

sevenBtn.addEventListener('click', function() {
    appendNumber(7)
})

eightBtn.addEventListener('click', function() {
    appendNumber(8)
})

nineBtn.addEventListener('click', function() {
    appendNumber(9)
})

//Changes colour of selected operator button
function clickOperatorButton(button){
    const buttons = document.querySelectorAll('button');
    
    //console.log(buttons)
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
    operand1 = "0"
    operand2 = ""
    operator = ""
}

function plusMinus(num){
    if(num < 0){
        return -(num)
    }
}

function modulus(num1, num2){
    return num1 % num2
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
    return Math.round((num1 / num2) * 1000) / 1000
}

function decimal(){
    if(display.textContent.includes(".")){
        alert("Only one decimal point allowed!")
    }
    else {
        display.textContent = display.textContent + "."
    }
}

function appendNumber(num){
    if( (display.textContent === "0" && num === 0)|| resetScreen){
        resetDisplay()
    }
    if(display.textContent === "0"){
        display.textContent = num; 
    }
    else {
        display.textContent += num;
    }
}

function setOperator(operation) {
    if(operator !== null ) evaluate()
    operand1 = display.textContent
    operator = operation
    resetScreen = true;
}

function resetDisplay(){
    display.textContent = "0"
    resetScreen = false;
}


function operate(operation, num1, num2){
    let a = Number(num1)
    let b = Number(num2)

    switch(operation){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if(b === 0) return null
            else return divide(a, b);
        case "%":
            return modulus(a, b)
        default:
            return null;
    }
}

function evaluate(){
    if(operator === "" || resetScreen){
        return
    }
    if(operator === "/" && display.textContent === "0"){
        alert("You can't divide by 0!")
        return
    }
    operand2 = display.textContent

    display.textContent = operate(operator, operand1, operand2)

    operator = ""
}
