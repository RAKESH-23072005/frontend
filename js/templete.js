var name = "rakesh";
var age = 19;
var clg = "kncet";
var branch ="cse";
// console.log(typeof(name)); used to check the type of variable
// console.log(typeof(age));
// console.log(typeof(clg));



//  without using template literals
var info;
info = "my name is "+ name + " and my age is " + age + " and i study in " + clg;
// console.log(info.toUpperCase()); //toUpperCase() used to convert the string into upper case

//with using template literals
info = `my name is ${name} and my age is ${age} and i am currently doing my BE in ${branch} at ${clg}`;
console.log(info);
