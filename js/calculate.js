document.getElementById("triangle-btn").addEventListener("click", function () {
  const baseValue = getInputValue("b-input");
  const heightValue = getInputValue("h-input");

  const value = 0.5 * baseValue * heightValue;

  displayValue("result-container", value);

  bInput.value = "";
  hInput.value = "";
});

function getInputValue(input) {
  const getInput = document.getElementById(input).value;
  const inputValue = Number(getInput);
  return inputValue;
}
function displayValue(input, value) {
  const p = document.createElement("p");
  p.innerText = `Triangle Area = ${value}`;
  const resultContainer = document.getElementById(input);
  resultContainer.appendChild(p);
}
