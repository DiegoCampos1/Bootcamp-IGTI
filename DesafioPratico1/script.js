const inputRed = document.querySelector("#inputRed");
const inputRedText = document.querySelector("#inputRedText");
const inputGreen = document.querySelector("#inputGreen");
const inputGreenText = document.querySelector("#inputGreenText");
const inputBlue = document.querySelector("#inputBlue");
const inputBlueText = document.querySelector("#inputBlueText");
const colorResult = document.querySelector("#colorResult");
const valueColor = document.querySelector("#valueColor");

valueColor.innerHTML = `rgb( ${0}, ${0}, ${0} )`;

inputRed.value = 0;
inputGreen.value = 0;
inputBlue.value = 0;

inputRedText.value = inputRed.value;
inputGreenText.value = inputGreen.value;
inputBlueText.value = inputBlue.value;

inputRed.addEventListener("input", function () {
  inputRedText.value = inputRed.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});

inputGreen.addEventListener("input", function () {
  inputGreenText.value = inputGreen.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});

inputBlue.addEventListener("input", function () {
  inputBlueText.value = inputBlue.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});
