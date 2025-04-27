let expensiveName = document.querySelector(".expensiveName");
let Amount = document.querySelector(".Amount");
let saveBtn = document.querySelector(".saveButton");
let ul = document.querySelector(".list-group");
let expensiveList = document.querySelector(".expensiveList");
let Expensivecal = document.querySelector(".Expensivecal");

loadEventListeners();
function loadEventListeners(){
    saveBtn.addEventListener("click",savebtn);
}

let Total = 0; //declare as gobal variable the value anywhere inside the fnction also


// save btn function retrive the info from the input box
function savebtn(e){
    e.preventDefault();
    if(Amount.value ==="" || expensiveName.value===""){
        alert("enter the value");
    }
    else{
        let li =document.createElement("li");
        li.className="list-group-item d-flex";
        let a = document.createElement("a");
        a.className="ms-auto";
        li.innerText = `Expensive Name:${expensiveName.value} Expensive Amount:${Amount.value}`;
        a.innerHTML=` <i class="delete-item ">X</i>`;
        // expensiveName.value="";
        // Amount.value="";
        li.appendChild(a);
        ul.appendChild(li);
        
        totalExpensive(Amount.value);
        
    }
}
let expensivecal = document.createElement("span");
expensivecal.className="expensivecal";


// cal total expensive 
function totalExpensive(TotalExpensive){
    Total +=parseInt(TotalExpensive);
    expensivecal.innerText=`Total Expensive: ${Total}`;
    expensiveList.append(expensivecal);
}


//deleting the expensive amount form the total expensive
ul.addEventListener("click",(event)=>{
    if(event.target.classList.contains('delete-item')){
        let li1=event.target.closest('li');
        let amount = parseInt(li1.innerText.split("Expensive Amount:")[1]);
        // console.log(amount);
        Total-=amount;
        expensivecal.innerText=`Total Expensive: ${Total}`;
        // console.log(Total);
        li1.remove();
        }
    



})
