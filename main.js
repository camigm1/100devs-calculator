const seven = document.querySelector(".seven");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const add = document.querySelector(".add");
const subtract = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

let startNum = [];
let secondNum = [];
let addSymbol = [];
let resultOne = "";

add.addEventListener("click", function (e) {
  secondNum = [];
  let symbolOne = e.target.innerText;
  console.log(symbolOne);
  addSymbol.push(symbolOne);
});

subtract.addEventListener("click", function (e) {
  secondNum = [];
  let symbolOne = e.target.innerText;
  console.log(symbolOne);
  addSymbol.push(symbolOne);
});

document.querySelectorAll(".seven").forEach((item) => {
  item.addEventListener("click", (event) => {
    let value = event.target.innerText;
    let valueNum = Number(value);
    startNum.push(valueNum);
    secondNum.push(valueNum);
    console.log(startNum);
    console.log(secondNum);
  });
});

function result() {
  let number = secondNum.length;
  let diff = startNum.splice(startNum.length - number, number);
  console.log(startNum);
  let numberOne = Number(startNum.join(""));
  let numberTwo = Number(secondNum.join(""));
  console.log(numberOne);
  console.log(numberTwo);
  let symbol = addSymbol.join();
  if (symbol === "+") {
    resultOne = numberOne + numberTwo;
    console.log(resultOne);
  } else if (symbol === "-") {
    resultOne = numberOne - numberTwo;
    console.log(resultOne);
  }
}

result();

equal.addEventListener("click", result);
