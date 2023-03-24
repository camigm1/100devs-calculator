const buttonClear = document.getElementById("clear");
const buttons = document.querySelectorAll("button");
const numberOutput = document.querySelector(".numberOutput");

let value = "";

let operator = "";
let arrayOne = [];
let arrayTwo = [];
let resultArray = [];
let result = "";
let numberOne = "";
let numberTwo = "";

buttons.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    value = e.target.innerHTML;
    if (result && operator) {
      if (value === "/" || value === "*" || value === "-" || value === "+") {
        operator = value;
        arrayOne = [];
        numberOutput.innerHTML = operator;
        console.log(operator);
      } else if (value === "=") {
        numberOne = Number(arrayOne.join(""));
        console.log(numberOne);
        console.log(operator);
        result = operate(operator, result, numberOne);
        numberOutput.innerHTML = result;
      } else {
        numberOutput.innerHTML += value;
        arrayOne.push(value);
      }
    } else if (
      value === "/" ||
      value === "*" ||
      value === "-" ||
      value === "+"
    ) {
      operator = value;
      numberOutput.innerHTML = operator;
    } else if (value === "=") {
      numberOne = Number(arrayOne.join(""));
      console.log(numberOne);
      numberTwo = Number(arrayTwo.join(""));
      console.log(numberTwo);
      console.log(operator);
      result = operate(operator, numberOne, numberTwo);

      numberOutput.innerHTML = result;
    } else if (operator) {
      arrayTwo.push(value);
      numberOutput.innerHTML += value;
    } else {
      numberOutput.innerHTML += value;
      arrayOne.push(value);
    }
  });

  buttonClear.addEventListener("click", function () {
    numberOutput.innerHTML = "";
    value = "";
    numberOutput.innerHTML = value;
    arrayOne = [];
    arrayTwo = [];
    operator = "";
    result = "";
  });
});

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "*") {
    return multiply(n1, n2);
  } else if (operator === "/") {
    return divide(n1, n2);
  } else {
    return "Try again";
  }
}
