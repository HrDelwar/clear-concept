
const fetch = require("node-fetch"); // foe node run

//async-await practice
async function hello(name) {
    console.log(name);
    return 'Hello ' + name;
}
const result = hello('Hr');// return promise
console.log(result);// print result promise
result.then(res => {
    console.log(res);//print promise data
})


// asynchronous function 
async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    display(data);
}
loadData();
function display(data){
    data.forEach(item => {
        console.log(item.name); // print data properties
    });
}