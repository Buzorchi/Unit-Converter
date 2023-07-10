const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthText = document.getElementById("length-el")
const volumeText = document.getElementById("volume-el")
const massText = document.getElementById("mass-el")


btnEl.addEventListener("click", function() { 
  lengthText.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.28084).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.28084).toFixed(3)} meters`

  volumeText.textContent = `${inputEl.value} liters = ${(inputEl.value *  3.78541).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 3.78541).toFixed(3)} liters`

  massText.textContent = `${inputEl.value} kilo = ${(inputEl.value * 2.20462).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.20462).toFixed(3)} kilo`

})
