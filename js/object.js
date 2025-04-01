const person ={
    name:"rakesh",
    age:19,
    clg:"kncet",
    degree:"BE",
    branch:"CSE",
    brothers:{
        name1:"kishore",
        name2:"shan",
        name3:"manoj",
        name4:"nishanth"
    },
    hobbies:["handball","football","coding","games"],
    address:{
        city:"trichy",
        state:"tamilnadu",
        country:"india"
    },
    functiontask:function(){
        console.log(`my name is ${this.name} and my age is ${this.age} and i am currently doing my BE in ${this.branch} at ${this.clg}`);
    }
}
var val = person.name;
val = person.age;
val = person.clg;
val = person.degree;
val = person.branch;
val = person.brothers.name1;
val = person.brothers.name4;
val =person.hobbies[0];
val= person.functiontask();
console.log(val);