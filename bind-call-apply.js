// normal person object
const normalPerson = {
    firstName: 'Hr',
    lastName: 'Delwar',
    salary: 1000,
    getFullName: function () { return this.firstName + ' ' + this.lastName }, // full name method
    getChargeBill: function (amount) { this.salary = this.salary - amount },// charge bill method
}
// console.log(normalPerson); //normal person object

// console.log(normalPerson.getFullName);// return function
console.log(normalPerson.getFullName());// call function and return full name 'Hr Delwar'

console.log('before', normalPerson.salary); // salary now 1000
// console.log(normalPerson.getChargeBill);// return function
normalPerson.getChargeBill(200);// call function and  set new salary
console.log('after', normalPerson.salary); // salary now 800

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    // getFullName: function(){this.firstName + ' ' + this.lastName},//repaid method
    salary: 25000,
    // getChargeBill: function(amount){this.salary = this.salary - amount}. // repaid method
    // here we can use other object method when they are same 
    // use normalPerson method here, we have three way 1.bind(), 2.call(), 3.apply()

}

//bind

//bind getFullName for hero person
const getHeroFullName = normalPerson.getFullName.bind(heroPerson);
// console.log(getHeroFullName);// return function
console.log(getHeroFullName());// call function and return full name 'Hero Alom'

// bind getChargeBill method for heroPerson  
const getHeroChargeBill = normalPerson.getChargeBill.bind(heroPerson);
console.log('before bind', heroPerson.salary); // salary now 25000
// console.log(getHeroChargeBill);// return function
getHeroChargeBill(5000);// call function and  set new salary 
console.log('after bind', heroPerson.salary); // salary now 20000


//call 
const friendlyPerson = {
    firstName: 'Ahamod',
    lastName: 'Ullah',
    salary : 30000,
    // here we call normal person method for friendlyPerson
}
// call

//call getFullName method for friendlyPerson from normalPerson
const friendlyPersonFullName = normalPerson.getFullName.call(friendlyPerson/**, ...arguments*/); // return 'Ahmod Ullah'
console.log(friendlyPersonFullName); // print full name in console log

console.log('before call', friendlyPerson.salary); // now salary is 30000

//call getChargeBill method for friendly person from normal person
normalPerson.getChargeBill.call(friendlyPerson, 3000 /**, arguments separated by comma */); // return result and set new salary 
console.log('after call', friendlyPerson.salary); // now salary is 27000

// apply 

//apply getFullName method for friendlyPerson from normalPerson
const applyFriendlyPersonFullName = normalPerson.getFullName.apply(friendlyPerson/**, ...arguments array*/); // return 'Ahmod Ullah'
console.log(applyFriendlyPersonFullName); // print full name in console log

console.log('before apply', friendlyPerson.salary); // now salary is 30000

//apply getChargeBill method for friendly person from normal person
normalPerson.getChargeBill.apply(friendlyPerson, [5000] /** arguments pass with array */); // return result and set new salary 
console.log('after apply', friendlyPerson.salary); // now salary is 25000


