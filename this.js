// practice 'this' keyword

// object one
const object1 = {
    firstName: 'Ali',
    lastName: 'Hon',
    fullName: function () {
        console.log(this); // 'this' keyword value is changing when her parent is change 
        return this.firstName + ' ' + this.lastName;
    }
}


const object2 = {
    firstName: 'Imrul',
    lastName: 'kalam'
}

// set fullName method for object2 from object1
object2.fullName = object1.fullName;

// console.log(object1);//object1
// console.log(object2); // Object2 

console.log(object1.fullName());//return 'Ali Hon'
console.log(object2.fullName());// return 'Imrul kalam'



//  different arrow function 'this' and normal function 'this'
const object3 = {
    name: 'Anayat',
    normalThis: function () {
        // here 'this' value is this object
        console.log(this);// print this object
    },
    arrowThis: () => {
        // here 'this' value in empty
        console.log(this);// print empty object 
    }
}
object3.normalThis();// call normalThis method
object3.arrowThis();//call arrowThis method
