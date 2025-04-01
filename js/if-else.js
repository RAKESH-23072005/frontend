 //if-else 
var age = 19;
var name = "rakesh sharma";
var name1 ="kishore";
var string = "hello i am rakesh sharma and i am 19 years old";
var string1="rakesh,kishore,sharma,19,20,21";
 if(age<10){
    console.log("child")
 }
 else if(age>10 && age<18){
    console.log("teenager")
 }
 else if(age>18 && age>25){
    console.log("young adult")
 }
 else{
    console.log("adult")
 }
 //if-else 

if(age>=18){
    console.log(`${name} is adult`);
}
else if(age<18){
    console.log(`${name} is child`);
}
else{
    console.log(`${name} is young adult`);
}
// slice 

console.log(name.slice(2,7));
// split
var val = string.split(" ");
val=string1.split(",");
val=string1.replace("rakesh","shan");//replace


val=string.includes("rakeshsharma");//includes check whether word would present in the array or not
console.log(val);
