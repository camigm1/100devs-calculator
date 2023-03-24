const buttonClear = document.getElementById("clear");
const buttons = document.querySelectorAll("button");
const numberOutput = document.querySelector(".numberOutput");

let value = "";
let operator = "";
let arrayOne = [];
let arrayTwo = [];

buttons.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    value = e.target.innerHTML;
    if (value === "/" || value === "*" || value === "-" || value === "+") {
      operator = value;
      numberOutput.innerHTML = "";
    } else if (value === "=") {
      let numberOne = Number(arrayOne.join(""));
      console.log(numberOne);
      let numberTwo = Number(arrayTwo.join(""));
      console.log(numberTwo);
      const result = operate(operator, numberOne, numberTwo);
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
    arrayOne = [];
    arrayTwo = [];
    operator = "";
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
