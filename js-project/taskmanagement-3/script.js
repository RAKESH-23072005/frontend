let taskInput = document.querySelector(".taskInput");
let taskAddBtn = document.querySelector(".taskAddBtn");
let taskContainer = document.querySelector(".taskContainer");
let taskName  = document.querySelector("#taskName");
eventLoader();
function eventLoader(){
    taskAddBtn.addEventListener("click",saveFunction);
    taskContainer.addEventListener("click",deleteTask);
    document.addEventListener("DOMContentLoaded",getTaskFromLocalStorage);
    
}



// displaying the task
function saveFunction(e){
    e.preventDefault();
    let TaskName = taskName.value;
    if(TaskName === ""){
        alert("enter the task");
    }
    else{
        let li = document.createElement("li");
        let a  = document.createElement("a");
        let comlpeteBtn = document.createElement("button");
        comlpeteBtn.className = "completebtn btn btn-success ms-5";
        comlpeteBtn.innerText = "Complete";
        li.className = "taskList list-group-item d-flex";
        a.className="delBtn link-danger ms-auto";
        a.innerHTML = `<i class="fa fa-remove"></i>`;
        li.innerText= TaskName;
        li.appendChild(comlpeteBtn);
        li.appendChild(a);
        taskContainer.appendChild(li);
        taskName.value="";
        comlpeteButton(comlpeteBtn);

        // localstorge function declartion
        localstorage(TaskName);
    }
}
// deleting the task
function deleteTask(e){
if(e.target.classList.contains('fa')){
    let str = e.target.parentElement.parentElement.innerText;
    let task;
    if(str.includes("Complete")){
         task = str.split("Complete");
         task=task[0].trim();
        // console.log(task);
    }
    else{
        task = str.split("completed");
        task=task[0].trim();
        // console.log(task);
    }
    localVar=JSON.parse(localStorage.getItem("localVar"));
    localVar.forEach(function(item,index){
        if(item === task){
            localVar.splice(index,1);
            localStorage.setItem("localVar",JSON.stringify(localVar));
        }
    })
    e.target.parentElement.parentElement.remove();
}
}


function comlpeteButton(comlpeteBtn){
    comlpeteBtn.addEventListener("click",function(){
        comlpeteBtn.parentElement.classList.toggle("completedTask");
        if(comlpeteBtn.innerText === "Complete"){
            comlpeteBtn.style.backgroundColor = "black";
            comlpeteBtn.parentElement.style.backgroundColor = "green";
            comlpeteBtn.innerText = "completed";
        }else{
            comlpeteBtn.parentElement.style.backgroundColor = "transparent";
            comlpeteBtn.innerText = "Complete";
        }
    })
}



// local storage 

function localstorage(taskName){
    let localVar;
    // console.log(taskName);
    if(localStorage.getItem("localVar") == null){
        localVar = [];
        localVar.push(taskName);
        // console.log(localVar);
        localStorage.setItem("localVar",JSON.stringify(localVar));
    }
    else{
        localVar=JSON.parse(localStorage.getItem("localVar"));
        localVar.push(taskName);
        localStorage.setItem("localVar",JSON.stringify(localVar));
        // console.log(localVar);
    }
}


// getting the task from local storage
function getTaskFromLocalStorage(){
    let localVar;
    if(localStorage.getItem("localVar") == null){
        localVar = [];
    }
    else{
        localVar=JSON.parse(localStorage.getItem("localVar"));
        localVar.forEach(function(item){
        let li = document.createElement("li");
        let a  = document.createElement("a");
        let comlpeteBtn = document.createElement("button");
        comlpeteBtn.className = "completebtn btn btn-success ms-5";
        comlpeteBtn.innerText = "Complete";
        li.className = "taskList list-group-item d-flex";
        a.className="delBtn link-danger ms-auto";
        a.innerHTML = `<i class="fa fa-remove"></i>`;
        li.innerText= item;
        li.appendChild(comlpeteBtn);
        li.appendChild(a);
        taskContainer.appendChild(li);
        taskName.value="";
        comlpeteButton(comlpeteBtn);
        })
    }
    console.log(localVar);
}