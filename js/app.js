import {calculateDistance} from "./lib.js";
const amountEl = document.getElementById('amountOfFuel');
const consumptionEl = document.getElementById('consumptionOfHundredKm');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

function reactToClick() {
    const amount = amountEl.value;
    const consumption = consumptionEl.value;
    let result = amount / consumption * 100;
    if (isNaN(result)) {
        resultEl.textContent = 'Введено недопустимое значение';
    }
    else if (consumption == 0) {
        resultEl.textContent = 'Расход топлива не может быть равен 0';
    }
    else {
        resultEl.textContent = calculateDistance(amount, consumption) + 'км';
    }
}
calculateEl.addEventListener('click', reactToClick);