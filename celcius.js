const prompt= require('prompt-sync')();

var c=parseInt(prompt("Enter the Teampareture in Celcius: "));

let f=(c*9/5)+32;

console.log("The Temparature in farenhight is: ",f);
