

const taskForm = document.querySelector("#task-form");
const Task = document.querySelector("#task");
const Item = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const delIcon = document.querySelector(".delete-item ");


loadEventListeners();

function loadEventListeners(){
    
    taskForm.addEventListener("submit",addTask);
    clearBtn.addEventListener("click",clrTask);

}


function addTask(e){
    e.preventDefault();
    if(Task.value ===""){
        alert("enter the task");
    }
    else{
        // alert("Successfully added");
        const li = document.createElement("li");
        li.className="collection-item";
        const a = document.createElement("a");
        a.className="delete-item secondary-content";
        a.innerHTML=`<i class="fa fa-remove"></i>`;
        li.innerText=Task.value;
        li.appendChild(a);
        Item.appendChild(li);
        storeLocalStorage(Task.value);
        Task.value="";
    }
}
function storeLocalStorage(taskvalue){
    let taskvalues
    if(localStorage.getItem("taskvalues") == null){
        taskvalues = [];
        taskvalues.push(taskvalue);
        localStorage.setItem("taskvalues",JSON.stringify(taskvalues));
    }
    else{
        console.log("Step 2");
        taskvalues = JSON.parse(localStorage.getItem("taskvalues"));
        taskvalues.push(taskvalue);
        localStorage.setItem("taskvalues",JSON.stringify(taskvalues));
    }
}
function clrTask(){
    const list = document.querySelectorAll("li");
    list.forEach(function(li){
        li.remove();
    })
    
}
Item.addEventListener("click",(event)=>{
        if (event.target.classList.contains('fa')) {
            event.target.closest('li').remove();
          }
          if (event.target.classList.contains('collection-item')){
            event.target.style.backgroundColor="red";
          }
    })
// console.log(taskForm,addTask,addItem);

