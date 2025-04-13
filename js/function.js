// const person1={
//     firstName:"rakesh",
//     lastName:"sharma",
//     age:20,
//     getFullInfo:function(){
//         return `hello i am ${this.firstName} ${this.lastName} and im ${this.age} old`;
//     }
    
// }
// console.log(person1.getFullInfo());


// function add(a,b){              //values are passed by using parameter 
//     return a+b;
// }
// console.log(add(23,29));


// var n1 =2;
// var n2= 3;
// var n3 =5;
// function add1(){    //values are predefined in the function
//     return n1+n2*n3;
// }
// console.log(add1());


// function add2(a=2,b=13,c=4,d=6){  //value are passed by using default parameter
//     return a+b+c+d;
// }
// console.log(add2());






(function (){
    console.log( 'hi im rakesh sharma and welcome to thoughtflexx page');
})();


function name(){
    return 'im rakesh sharma'

}
console.log(name());


const infoP1={
    name:"rakesh sharma",
    age:18,
    clgName:"kncet",
    dept:"cse",
    course:"be",
    favActor:["Suriya","suriya"],
    output:function(){
        return `hello my dear followers my favActor is ${this.favActor[0]} and ${this.favActor[1]}`;
    }
    }
    console.log(infoP1.output());
