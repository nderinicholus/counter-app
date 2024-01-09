// Declare const
const counterLabel = document.getElementById("counterLabel");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");
let counter = 0;

incrementBtn.onclick = function () {
  counter++;
  counterLabel.textContent = counter;
  if (counter > 0) {
    counterLabel.style.color = 'blue';
  }
}

resetBtn.onclick = function () {
  counter = 0;
  counterLabel.textContent = counter
  counterLabel.style.color = 'black'
}

decrementBtn.onclick = function () {
  counter--;
  counterLabel.textContent = counter;
  if (counter < 0) {
    counterLabel.style.color = 'red';
  } 
}

