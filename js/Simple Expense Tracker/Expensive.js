

let expensiveName = document.querySelector(".expensiveName");
let Amount = document.querySelector(".Amount");
let saveBtn = document.querySelector(".saveButton");
let ul = document.querySelector(".list-group");
let expensiveList = document.querySelector(".expensiveList");
let Expensivecal = document.querySelector(".Expensivecal");

loadEventListeners();
function loadEventListeners(){
    saveBtn.addEventListener("click",savebtn);
    document.addEventListener("DOMContentLoaded",getExpensive);
}

function getExpensive(){
    let localStr;
    localStr=[];
    if(localStorage.getItem("localStr")===null){
        console.log("empty");
    }
    else{
        localStr=JSON.parse(localStorage.getItem("localStr"));
         localStr.forEach(function(element){
            let li =document.createElement("li");
            li.className="list-group-item d-flex";
            let a = document.createElement("a");
            a.className="ms-auto";
            li.innerText = `Expensive Name:${element.expensiveName} Expensive Amount:${element.Amount}`;
            a.innerHTML=` <i class="delete-item ">X</i>`;
            // expensiveName.value="";
            // Amount.value="";
            li.appendChild(a);
            ul.appendChild(li);
            
            totalExpensive(element.Amount);
        })
    }
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
        storeLocalStorage(expensiveName.value,Amount.value);
        
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
        let text= li1.innerText;
        let name = text.split("Expensive Name:")[1].split(" Expensive Amount:")[0].trim();
        let amount = parseInt(li1.innerText.split("Expensive Amount:")[1]);
        // console.log(amount);
        Total-=amount;
        expensivecal.innerText=`Total Expensive: ${Total}`;
        // console.log(Total);
        li1.remove();
        reomvelocalStorage(name,amount);
        }
})
function reomvelocalStorage(name,amount){
    let localStr = JSON.parse(localStorage.getItem("localStr"));
    localStr = localStr.filter(function(expense){
        return !(expense.expensiveName === name && expense.Amount == amount);
    });
    console.log(localStr);
    localStorage.setItem("localStr",JSON.stringify(localStr));
    console.log("happen")
}




// local storage

function storeLocalStorage(name,amt){
    let localStr;
    if(localStorage.getItem("localStr")=== null){
        localStr=[];
        let expense = {
            expensiveName: name,
            Amount: amt
        };
        localStr.push(expense);
        localStorage.setItem("localStr",JSON.stringify(localStr));
    }
    else{
        localStr=JSON.parse(localStorage.getItem("localStr"));
        let expense = {
            expensiveName: name,
            Amount: amt
        };
        localStr.push(expense);
        localStorage.setItem("localStr",JSON.stringify(localStr));
    }
}