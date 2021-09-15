const allButtons = document.querySelectorAll(".buttons button");

function calculate(option, num1, num2) {
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
    case "clear":
      document.querySelector("#firstNumber").value = 0;
      document.querySelector("#secondNumber").value = 0;
      return 0;
    default:
      console.log("There is no such option");
  }
}

allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    //Getting input numbers
    const num1 = Number(document.querySelector("#firstNumber").value);
    const num2 = Number(document.querySelector("#secondNumber").value);
    //Calculating based on button function
    const result = calculate(event.target.id, num1, num2);
    //Logging result
    document.querySelector("#result").innerHTML = result;
  });
});
