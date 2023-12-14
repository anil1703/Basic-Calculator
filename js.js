let Screen = document.getElementById("inputDisplay");
//Number Buttons
let btnOne = document.getElementById("butnOne");
let btnTwo = document.getElementById("butnTwo");
let btnThree = document.getElementById("butnThree");
let btnFour = document.getElementById("butnFour");
let btnFive = document.getElementById("butnFive");
let btnSix = document.getElementById("butnSix");
let btnSeven = document.getElementById("butnSeven");
let btnEight = document.getElementById("butnEight");
let btnNine = document.getElementById("butnNine");
let btnZero = document.getElementById("butnZero");
let btnZero2 = document.getElementById("butnZero2");

//Calci Buttons

let btnDot = document.getElementById("butnDot");
let btnDivide = document.getElementById("butnDivide");
let btnMultiply = document.getElementById("butnMultiply");
let btnMinus = document.getElementById("butnMinus");
let btnPlus = document.getElementById("butnPlus");

let calculate = document.getElementById("butnEqualto");


let btnAC = document.getElementById("DleteAll");
let btnDL = document.getElementById("RemoveLastDigit");

let displayVAlue = "";

btnAC.addEventListener("click", function() {
    Screen.value = "";
    displayVAlue = "";
});

btnDL.addEventListener("click", function() {
    let STR = Screen.value;
    Screen.value = STR.slice(0, STR.length - 1);
});






btnOne.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnTwo.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnThree.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnFour.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnFive.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnSix.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnSeven.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnEight.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnNine.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnZero.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnZero2.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

//---------------------------

btnDot.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnDivide.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnMultiply.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnMinus.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

btnPlus.addEventListener("click", function(event) {
    displayVAlue += event.target.value;
    Screen.value = displayVAlue;
});

calculate.onclick = function() {
    let data = Screen.value;
    let Ans = eval(data);
    Screen.value = Ans;
    displayVAlue = Ans;

}