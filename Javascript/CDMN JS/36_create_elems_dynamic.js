const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterElement = document.getElementById('counter');

const ulElement = document.getElementById('list-items');

let counter = 0;

function incrCounter() {
    counter++;
    counterElement.innerText = counter;    
    const li = document.createElement('li');

    /* Approach 1 */
        li.innerHTML = '<b>' + 'Something Incremented ' + '</b>' + counter;    
        ulElement.appendChild(li);

    /* Approach 2 */
        // const bold = document.createElement('b');
        // const textNode = document.createTextNode('Sentence');
        // bold.appendChild(textNode);

        // const textNode2 = document.createTextNode(counter);
        // li.appendChild(bold);
        // li.appendChild(textNode2);
        
        /* Append Element */
        // ulElement.appendChild(li);
}

function decrCounter() {
    counter--;
    counterElement.innerText = counter;
    const li = document.createElement('li');
}

incrementBtn.addEventListener('click',  incrCounter);
decrementBtn.addEventListener('click',  decrCounter);