const myAge = 22;

function printMyAge() {
    // var myAge shadowed by local variable - if no local var js will go to parent variable name
    const myAge = 25;
    console.log(myAge);
}

printMyAge();

