// practice new keyword

//declare class
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    getChargeBill(amount) {
        return this.salary = this.salary - amount;
    }
}

//use new keyword for create object from class
const normalPerson = new Person('Kari', 'Ahmed', 1000); // create person with new keyword
console.log(normalPerson.getFullName()); // return full name 'Kari Ahmed'
console.log('before normal person salary', normalPerson.salary);// salary is 1000
normalPerson.getChargeBill(300);//call chargeBill method
console.log('after normal person salary', normalPerson.salary);//now  salary is 700
console.log(normalPerson);// normal person object

//use new keyword for create object from class
const friendlyPerson = new Person('Hr', 'Delwar', 5000); // create person with new keyword
console.log(friendlyPerson.getFullName()); // return full name 'Hr Delwar'
console.log('before friendly person salary', friendlyPerson.salary);// salary is 5000
friendlyPerson.getChargeBill(2000);//call charge bill method
console.log('after friendly person salary', friendlyPerson.salary);//now  salary is 3000
console.log(friendlyPerson);// friendly person object

// use new keyword for create object from function
//declare function
function AnotherPerson(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.fullName = () => this.firstName + ' ' + this.lastName;
    this.chargeBill = function (amount) {
        return this.salary = this.salary - amount;
    }
}


//use new keyword for create object from function

const heroPerson = new AnotherPerson('Jahid', 'Miah', 30000); // create person with new keyword
console.log(heroPerson.fullName()); // return full name 'Mahid Miah'
console.log('before hero person salary', heroPerson.salary);// salary is 30000
heroPerson.chargeBill(10000);//call chargeBill method
console.log('after hero person salary', heroPerson.salary);//now  salary is 20000
console.log(heroPerson);// hero person object


//use new keyword for create object from function

const funnyPerson = new AnotherPerson('Ikram', 'Ali', 15000); // create person with new keyword
console.log(funnyPerson.fullName()); // return full name 'Ikrum Ali'
console.log('before funny person salary', funnyPerson.salary);// salary is 15000
funnyPerson.chargeBill(2000);//call chargeBill method
console.log('after funny person salary', funnyPerson.salary);//now  salary is 13000
console.log(funnyPerson);// funny person object