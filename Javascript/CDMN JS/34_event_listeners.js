const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterElement = document.getElementById('counter')

let counter = 0

function incrCounter() {
    counter++;
    counterElement.innerText = counter;
}

function decrCounter() {
    counter--;
    counterElement.innerText = counter;
}

incrementBtn.addEventListener('click',  incrCounter);
decrementBtn.addEventListener('click',  decrCounter);