document.getElementById("triangle-btn").addEventListener("click", function () {
  const bInput = document.getElementById("b-input");
  const hInput = document.getElementById("h-input");
  const baseValue = bInput.value;
  const heightValue = hInput.value;
  const p = document.createElement("p");
  p.innerText = `Triangle Area = ${
    0.5 * Number(baseValue) * Number(heightValue)
  }`;
  const resultContainer = document.getElementById("result-container");
  resultContainer.appendChild(p);
  bInput.value = "";
  hInput.value = "";
});
