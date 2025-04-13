

function display(){
    let val = document.getElementById("text1").value;
    let li = document.createElement("li");
    li.className = "item";
    let h1 = document.createElement("h1");
    h1.innerText = `${val}`;
    li.appendChild(h1);
    let ul = document.querySelector(".list");
    ul.appendChild(li);
}
function remove(){
    let tasks = document.querySelectorAll("li:last-child");
    tasks.forEach(function(task){
        task.remove();
    });
}
console.log(document.querySelector(".item"));









