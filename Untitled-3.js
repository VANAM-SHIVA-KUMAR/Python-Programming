let expression = "";

function display(value) {
  expression += value;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result;
    document.getElementById("result").value = expression;
  } catch (error) {
    alert("Invalid Expression");
    expression = "";
    document.getElementById("result").value = expression;
  }
}