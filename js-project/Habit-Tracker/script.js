let  addHabit = document.querySelector('.addHabit');
let habit = document.querySelector('#habitName');
let SaveBtn = document.querySelector('.SaveBtn');
let ul = document.querySelector('.displayHabitContainer');


let clearAll = document.createElement('button');
clearAll.className='clearAll btn btn-danger';
clearAll.innerText='Clear All';

//function contianer

loadEventListeners();
function loadEventListeners(){
    addHabit.addEventListener("click",saveButton);
    ul.addEventListener("click",deleteHabitList);
    clearAll.addEventListener("click",deleteAlllocalStorage);

    document.addEventListener("DOMContentLoaded",persistentData);

}

//  saveBtn input of the user will display dynamically

function saveButton(e){
    e.preventDefault();
    let habitName = habit.value;
    if(habitName === ""){
        alert("Add your Habit");
        console.log("hello")
    }
    else{
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.className="ms-auto";
        a.innerHTML=`<i class="delete-item ">X</i>`;
        li.className="list-group-item d-flex";
        li.innerText=`habit Name :${habitName}`;
        li.appendChild(a);
        ul.appendChild(li);
        ul.appendChild(clearAll);
        storelocalStorage(habitName);
    }
}

// deleting the habit list and clearAll list

function deleteHabitList(e){
    if(e.target.classList.contains('delete-item')){
        // if(confirm("are want to remove this Habit ?")){
        let text = e.target.parentElement.parentElement.innerText;
         text= text.split("habit Name :");
if (text.length > 1) {
    let afterHabitName = text[1].trim();  // "Gym\nX"
    let words = afterHabitName.split(/\s+/); // ["Gym", "X"]
console.log(words)
    text = words[0];
} 
            e.target.parentElement.parentElement.remove();
        // }
        deletelocalStorage(text);

    }
    else if(e.target.classList.contains('clearAll')){
        // if(confirm("Are sure to remove all the habits ?")){
            e.target.parentElement.remove();
        // }
    }
}

// storing the element to the localStroage

function storelocalStorage(habitName){
    let localStr;

    if(localStorage.getItem("localStr")===null){
        localStr=[];
        let habit = {
            Habit: habitName
        }
        localStr.push(habit);
        localStorage.setItem('localStr',JSON.stringify(localStr));
        // console.log(localStr);
    }
    else{
        localStr=JSON.parse(localStorage.getItem("localStr"));
        let habit = {
            Habit: habitName
        }
        localStr.push(habit);
        localStorage.setItem("localStr",JSON.stringify(localStr));
        // console.log("step 2",localStr);

    }
}

// delete the saved data from the locaStorage

function deletelocalStorage(text){
    let localStr = JSON.parse(localStorage.getItem("localStr"));
    // if(confirm("are sure ?")){
        localStr= localStr.filter(function(habit1){
            console.log(habit1.Habit,text)   
            return habit1.Habit !== text
               
        })
        localStorage.setItem("localStr",JSON.stringify(localStr));
    // }
}
function deleteAlllocalStorage(){
    localStorage.clear();
}


// persistent data from the localStorage

function persistentData(){
    let localStr;
    localStr=[];
    if(localStorage.getItem("localStr")===null){
    }
    else{
        localStr=JSON.parse(localStorage.getItem("localStr"));
        
        localStr.forEach(function(element){
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.className="ms-auto";
            a.innerHTML=`<i class="delete-item ">X</i>`;
            li.className="list-group-item d-flex";
            li.innerText=`habit Name :${element.Habit}`;
            li.appendChild(a);
            ul.appendChild(li);
            ul.appendChild(clearAll);
        })
    }
    
}