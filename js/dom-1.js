// let val;
// val=document.body;
// val=document.doctype;
// val=document.domain;
// val=document.URL;
// console.log(val);

// const { text } = require("express");

// function add1(){
//     val1=document.getElementById('n1').value;
//     val2=document.getElementById('n2').value;
//     addnum=Number(val1)+Number(val2);
//     document.getElementById('result').style.display='block';
//     document.getElementById('final').innerHTML=addnum;
// }


function dm1(){
    var x= document.getElementById('text1').value;
    if(x=="send"){
        document.getElementById('output').innerHTML=`${x} successfully sent`;
       var y= document.getElementById('color');
       y.innerHTML="unfollow";
       y.style.backgroundColor="rgba(219, 219, 219, 0.47)";
       y.style.color="black";
    }
    else{
        document.getElementById('output').innerHTML=`${x} is not correct dm word.send the correct dm word`;
        var z= document.getElementById('color');
        z.innerHTML="follow";
        z.style.backgroundColor="rgba(47, 139, 237, 0.98)";
        z.style.color="white";
    }
}
function followbtn(){
    text = document.getElementById('color').innerHTML;
    if(text=="follow"){
        document.getElementById('color').innerHTML="unfollow";
        document.getElementById('color').style.backgroundColor="rgba(219, 219, 219, 0.47)";
        document.getElementById('color').style.color="black";
    }
    else{
        document.getElementById('color').innerHTML="follow Me";
        document.getElementById('color').style.backgroundColor="rgba(47, 139, 237, 0.98)";
        document.getElementById('color').style.color="white";
    }
}


var q = document.querySelector(".btn1").innerHTML;
console.log(q);
q=q.innerHTML="hi friends marakama follow paniruga friends........";
console.log(q);
