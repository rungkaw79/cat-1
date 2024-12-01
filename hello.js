const x = 10;
const y = 30;
//"Result of "= x + y is 40 ka)
//......................
console.log (`Result of = x + y is ${x + y} ka`);  



const x = 10;
const y = 40;
console.log (Request of of x + y is ${x + y} krub); // $คือตัวคำสั่ง

//------------------------------------------------ 

const nameChecked = true;
const phoneChecked = false;
console.log(Name checked : ${nameChecked} Phone checked : ${phoneChecked} );
console.log(5 < 10);

let accessAllowed;
let age = 10;
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
console.log("Allow access ?" , accessAllowed);




let age = 20;
let accessAllowed = (age > 18) ? "Yes" : "NO";
console.log(Allow access ? [${accessAllowed}]);



const ALLOWED_AGE=18;
let age = 20;
let accessAllowed = (age > ALLOWED_AGE) ? "Yes" : "NO";
console.log(Allow access ? [${accessAllowed}]);



let year= 2019;
if(year < 2019) {
    console.log("Too old");
}
else if (year > 2019) {
    console.log("Too new");
}
else {
    console.log("It's this year");
}



function adder(a,b){
    return a + b
}

console.log(adder(7,9))






let name = "John";

function showMessage () {
    console.log(Hello ${name});
}

showMessage();

console.log(name)







function showMessage(message, toUpper=false) {
    toUpper ? console.log(message.toUpperCase()) : console.log(message);
}

showMessage("hello 1");
showMessage("hello 2", true);
showMessage("hello 3", toUpper=true);





const user ={name:'John'};
user.name = {'smith',age:30 };
console.log (`Name : ${user.name} Age : ${user.age}`);


































function showMessage(message,toUpper=false){
    toUpper ? console.log(message.toUpperCase()):console.log(message);
}

showMessage("hello 1");
showMessage("hello 2",true);
showMessage("hello 3",toUpper=true);