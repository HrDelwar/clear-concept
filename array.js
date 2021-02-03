// map() array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const square = numbers.map(element => Math.pow(element, 2));//square of array element and return a array
const root = numbers.map(x => Math.sqrt(x).toFixed(1));// root of array element and return a array
// console.log(square, root);// print console log

//slice(startCount, endCount) array or copy a part or array

// const arrayPart = numbers.slice(2, 9); // make array  3 to 9 
// console.log(arrayPart); // print 

// //splice(startCount , deleteCount) array or cut ar part of array
// const removeArray = numbers.splice(2, 7); // make array 3 to 9 and remove main array 
// console.log(removeArray);

//join array
const joinArray = numbers.join('/');// join array with '/' default ","
console.log( 'join array with"/" : ',joinArray);

// map array contain object
const persons = [
    {
        id: 1,
        name: 'A',
        age: 20,

    },
    {
        id: 2,
        name: 'B',
        age: 21
    },
    {
        id: 3,
        name: 'C',
        age: 22
    },
    {
        id: 4,
        name: 'D',
        age: 23
    }
];

// set id = name and return reformated array 
const setIdEqualName = persons.map(x => {
    let newX = {};
    newX[x.id] = x.name;
    return newX;
});

// get persons name with array from method
const personsName = Array.from(persons, x => x.name);

// console.log(personsName, setIdEqualName); // print in console log

//filter
const personsLargerThanAge20 = persons.filter(x => x.age > 20);//return all persons properties who's age is larger 20

const parsonAgeLargerThanAge20 = persons.filter(x => x.age > 20).map(x => x.age);//return only persons age value who's age is larger 20 

// console.log(parsonAgeLargerThanAge20);

// get prime number in array element
const primeNum = numbers.filter(num =>{
    for (let i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return num > 1;
})

console.log('filter prime number :' ,primeNum);
