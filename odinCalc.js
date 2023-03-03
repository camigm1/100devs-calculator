const buttonClear = document.getElementById("clear");
const buttons = document.querySelectorAll("button");
const numberOutput = document.querySelector(".numberOutput");

const numOne = [];
const actualNumber = numOne.join();

console.log(actualNumber);
buttons.forEach((elem) => {
  elem.addEventListener("click", function () {
    const value = elem.innerHTML;
    numberOutput.innerHTML = value;
    numOne.push(value);
    console.log(value);
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

buttonClear.addEventListener("click", function () {
  numberOutput.innerHTML = 0;
});
