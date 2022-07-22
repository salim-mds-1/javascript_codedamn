// Task - Decrement Button delete the childs
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterElement = document.getElementById('counter');
const ulElement = document.getElementById('list-items');

let counter = 0;

function incrCounter() {
    counter++;
    counterElement.innerText = counter;    
    const li = document.createElement('li');

    // Setting attribute
    li.setAttribute('data-counter', counter);
    li.innerHTML = '<b>Sentence</b>' + counter;
    ulElement.appendChild(li);  
}

function decrCounter() {
    const li = ulElement.querySelector('[data-counter="'+counter+'"]');
    li.remove();

    // Getting Attribute
    const number = parseInt(li.getAttribute('data-counter'), 10)
    if (number % 2 === 0) {
        li.remove()
    }

    counter--;
    counter.innerText = counter;
}

incrementBtn.addEventListener('click',  incrCounter);
decrementBtn.addEventListener('click',  decrCounter);