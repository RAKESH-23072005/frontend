// document.querySelector("#addTaskButton").addEventListener("click",function(){
//     alert("Task added!");
// });
//using anyonoumous function
document.querySelector("#addTaskButton").addEventListener("click",onclick);
let count = 0;
var countchange= document.querySelector(".numberTask").children[0];
countchange.textContent = count;

function onclick(){
    alert("task added!");
    document.querySelector("#addTaskButton").classList.toggle("changecolor");
    document.querySelector(".count").classList.add("changecolor");
    count++;
    countchange.textContent = count;
}
//using reference function

