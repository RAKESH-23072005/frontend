const num = "23";
const num1 = 23;

 if(num1===num){          //it check the value and data type are equal are not
   console.log("value and type are equal");
 }
 else if(num1==num){      //it only check the values are equal does not check the data type
   console.log("value equal but it does not check type");
 }


 //operator precedence 
 const a =1;
 const b =2;
 const c =3;
var val;
val = b/a*b/c;   
console.log(`val is ${val}`);
console.log();
console.log();