let evenNumbers = []

// Equality
const result = 1 == 1
console.log(result);

/* Objects */
const myObject = {
    'keyName1': 'value1',
    'keyName2': 'value2',
    'ObjString': 'qwerty123',
    'ObjNum': 12345,
    'ObjFunc' : function func1() {
        // alert('Obj Function Executed');
        console.log('executed');
    }, 
    'Objobject' : {
        'obj1' : 'yes',
        'obj2' : 'no'
    },
    keyName2:{
        'keyName 2.1' : 'hello',
        'keyName 2.2' : 'world'
    },
    keyName3:{
        subKeyName: 'sample text 1'
    }
}

// console.log(myObject);
// console.log(myObject['keyName1']);
console.log(myObject['Objobject']['obj1']);
console.log(myObject.keyName2['keyName 2.1']);
console.log(myObject.keyName3.subKeyName); 