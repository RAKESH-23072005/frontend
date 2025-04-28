

function saveInfo(){
    let nameInput = document.querySelector("#name").value.trim();
    let emailInput = document.querySelector("#email").value.trim();
    let phoneInput = document.querySelector("#phone").value.trim();
    let ageInput = document.querySelector("#age").value.trim();
    let studetnInput = document.querySelector("#id").value.trim();
    if(nameInput === "" || emailInput === "" || phoneInput === "" || ageInput === "" || studetnInput === "") {
        alert("Please fill in all fields.");
        return;
    }
    else{
        // document.querySelector("#name").value = "";
        // document.querySelector("#email").value = "";
        // document.querySelector("#phone").value = "";
        // document.querySelector("#age").value = "";
        // document.querySelector("#id").value = "";
    }
    let data = {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        age: ageInput,
        studentId: studetnInput
    };
    let outputInfo = document.querySelector(".outputinfo");
let div = document.createElement("div");
div.className = "info";
 let name = document.createElement("h2");
 name.className = "nameoutput";
    name.innerText = "Name: " + data.name;  
    let email = document.createElement("h2");
    email.className = "emailoutput";
    email.innerText = "Email: " + data.email;
    let phone = document.createElement("h2");
    phone.className = "phoneoutput";
    phone.innerText = "Phone: " + data.phone;
    let age = document.createElement("h2");
    age.className = "ageoutput";
    age.innerText = "Age: " + data.age;
    let studentId = document.createElement("h2");
    studentId.className = "studentIdoutput";
    studentId.innerText = "Student ID: " + data.studentId;
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.innerText = "Delete";
    btn.onclick = function() {
        outputInfo.removeChild(div);
    };

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(phone);
    div.appendChild(age);
    div.appendChild(studentId);
    div.appendChild(btn);
    outputInfo.appendChild(div);


}
function cancelbtn(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#id").value = "";
}