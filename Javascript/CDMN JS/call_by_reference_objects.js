const myProfile = {
    name : 'Sam',
    age : 22
}

const secondProfile = {
    name : 'John',
    age : 32
}

function primitiveMutate(primitive) {
    primitive++;
    console.log(primitive);
}

function mutate (obj){
    obj.age++;
    console.log(obj.age);
}

let num = 100
primitiveMutate(num);
// Number not changed since it was made 101
console.log(num); 

mutate(secondProfile)
// Behavious of Object changed 