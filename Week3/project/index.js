// Your code goes in here
const costElement = document.getElementById('cost');
const serviceElement = document.getElementById('service');
const peopleElement = document.getElementById('people');
const btn = document.getElementById('btn');
const tipAmount = document.getElementById('tipAmount');
const number = document.getElementById('number');
const each = document.getElementById('each');

function calculateTip(event) {
    event.preventDefault();
    const cost = Number(costElement.value);
    const service = Number(serviceElement.value);
    const people = Number(peopleElement.value);
    const tip = cost * service / people;
    const tipString = "$" + tip.toFixed(2)

    tipAmount.style.display = "block";
    if (people > 1) {
        each.style.display = "block"
    } else {
        each.style.display = 'none'
    }
    number.innerText = tipString;
}

btn.addEventListener('click', calculateTip);