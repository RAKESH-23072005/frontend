var container = document.querySelector(".tasklist-display");
var ul = document.createElement("ul");
ul.id = "task-list1";
var h1 =document.createElement("h1");
function display(){
   container.appendChild(ul);
    var task = document.createElement("li");
    task.id="task-list";
    var input = document.getElementById("taskInput").value;
    task.innerHTML = "<h1>" + input + "</h1>";
    var deleteButton = document.createElement("button");
    deleteButton.onclick = function() {
        task.remove();
    };
    deleteButton.innerHTML = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";

    task.appendChild(deleteButton);
    ul.appendChild(task);
}
