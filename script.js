const btnSum = document.querySelector("#sum");
const btnSub = document.querySelector("#sub");
const btnDiv = document.querySelector("#div");
const btnMul = document.querySelector("#mul");
const btnMod = document.querySelector("#mod");
const btnClear = document.querySelector("#clear");
let num1 = 0;
let num2 = 0;
let result = null;

function getInputNumbers() {
  num1 = Number(document.querySelector("#firstNumber").value);
  num2 = Number(document.querySelector("#secondNumber").value);
}

function calculate(option) {
  switch (option) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "div":
      return num1 / num2;
    case "mul":
      return num1 * num2;
    case "mod":
      return num1 % num2;
    default:
      console.log("There is no such option");
  }
}

function logResult(result) {
  if (isNaN(result)) {
    document.querySelector("#errorMessage").innerHTML =
      "Please enter number type variables";
  } else {
    document.querySelector("#errorMessage").innerHTML = null;
    document.querySelector("#result").innerHTML = result;
  }
}

btnSum.addEventListener("click", (event) => {
  getInputNumbers();
  result = calculate("sum");
  logResult(result);
});

btnSub.addEventListener("click", (event) => {
  getInputNumbers();
  result = calculate("sub");
  logResult(result);
});

btnDiv.addEventListener("click", (event) => {
  getInputNumbers();
  result = calculate("div");
  logResult(result);
});

btnMul.addEventListener("click", (event) => {
  getInputNumbers();
  result = calculate("mul");
  logResult(result);
});

btnMod.addEventListener("click", (event) => {
  getInputNumbers();
  result = calculate("mod");
  logResult(result);
});

btnClear.addEventListener("click", (event) => {
  document.querySelector("#firstNumber").value = 0;
  document.querySelector("#secondNumber").value = 0;
  logResult(0);
});
