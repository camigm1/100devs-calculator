const button = document.getElementById("clear");
const numberOutput = document.querySelector(".numberOutput");

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

button.document.addEvenListener("click", function () {
  numberOutput.innerHTML = "";
});
