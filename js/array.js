const name = ["rakesh","kishore","shan","nishanth","manoj"];
var val;
val = name.length;
val = name[3]; //accessing the first element of the array
val =name.indexOf("shan"); //indexOf() used to find the index of the element in the array
val =Array.isArray(name); //isArray() used to check whether the variable is array or not
val = name.push("madhu"); //push() used to add the element at the end of the array
val = name.pop(); //pop() used to remove the last element of the array
val = name.unshift("madhu"); //unshift() used to add the element at the beginning of the array
val = name.shift(); //shift() used to remove the first element of the array
val = name.splice(1,4); //splice() used to remove the element from the array
name.reverse(); //reverse() used to reverse the array 
console.log(name);
console.log(val);