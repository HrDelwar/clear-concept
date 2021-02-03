// creating encapsulation environment
const stopWatch = () => {
    let count = 1; // local variable

    // inner function, a closure.
    // use variable declare in parent function
    return () => count++;
};

const clock1 = stopWatch();
//console.log(clock1);// function

const clock2 = stopWatch();
// console.log(clock2);// function

// console.log('clock1-count',clock1(), 'clock2-count',clock2());
// console.log('clock1-count',clock1(), 'clock2-count',clock2());
// console.log('clock1-count',clock1(), 'clock2-count',clock2());
// console.log('clock1-count',clock1(), 'clock2-count',clock2());
// console.log('clock1-count',clock1(), 'clock2-count',clock2());

// console.log('clock1-count', clock1());
// console.log('clock1-count', clock1());
// console.log('clock2-count', clock2());
// console.log('clock2-count', clock2());

// console.log('clock1-count',clock1(), 'clock2-count',clock2());


// const sum = (x, y) => {
//     return () => x + y;
// }
// let add = sum(5, 6); // not added now
// add = add();// now added
// console.log(add);// print in console log

// lets more explain
const counter = () => {
    let count = 0;
    const changeBy = val => {count += val};
    return {
        increment: () => changeBy(1),
        decrement: () => changeBy(-1),
        value: () => count
    }
}

const counter1 = counter();
const counter2 = counter();

counter1.increment();
console.log( 'first time call counter1 increment value is', counter1.value());
counter1.increment();
counter1.increment();
console.log('second two time call counter1 increment value is', counter1.value());
counter1.decrement();
console.log('fist three time call counter1 increment and later call counter1 decrement value is', counter1.value());

counter2.increment();
console.log( 'first time call counter2 increment value is', counter2.value());
counter2.increment();
counter2.increment();
console.log('second two time call counter2 increment value is', counter2.value());
counter2.decrement();
console.log('fist three time call counter2 increment and later call counter2 decrement value is', counter2.value());

// Note : the counter1 and counter2 is store different count value, because both they are contain her parent function count variable.
//So the make a encapsulation closure environment 