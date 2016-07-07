

var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea = function(l,w){
    return l * w;
};

var name = "Link";

console.log("Age: " + age);
console.log("Pi: " + pi.toFixed(2));
console.log("Date: " + date);
console.log("Name: " + name);
console.log("Compute Area: " + computeArea(10,60));


var x = 1;
var y = null;
var waladiha = undefined;

if(x)
console.log('x is true');

if(!y)
console.log('y is false');

if(!waladiha)
console.log('wala diha is undefined');


//==================JSON Javascript Object Notation;

var jsonObject = {
    name:'Van Errel',
    lastname:'Cardel',
    address:'Baclayon'
};

console.log("Name: " + jsonObject.name);
console.log("Last Name: " + jsonObject.lastname);
console.log("Address: " + jsonObject.address);
console.log(jsonObject);


