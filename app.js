let counterEl = document.getElementById("count-el");
const incrementBtn = document.querySelector("#increment-btn");
let saveEl = document.querySelector("#save-el");

let count = 0;

function increment() {
  count++;
  counterEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  counterEl.textContent = 0;
  count = 0;
}
