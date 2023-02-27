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

const calculator = {
  start: 0,
  add(num) {
    return (start += num);
  },
  subtract(num) {
    return (start -= num);
  },
  divide(num) {
    return (start /= num);
  },
  multiply(num) {
    return (start *= num);
  },
  clear() {
    return (start = 0);
  },
};

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
