// Global Scope
const v = 'v';

function x(){
    // Private Scope
    const hello = 'world';
    console.log(hello);
}

x()
console.log(v);


// Opening a Closing curly braces called scope. 
// Scope - Area where Variable is arrive
// Loops, Statement, Functions are scopes