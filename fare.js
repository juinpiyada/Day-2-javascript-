const prompt=require('prompt-sync')();

var f=parseInt(prompt("Enter the temp parature in: "));

c=(f-32)*5/9;

console.log("The Temp in celciculs: ",c);