const prompt=require('prompt-sync')();
var y=parseInt(prompt("Enter the year: "));

if (y%2004==0)
    console.log("the year is leapyear: ",y);
else
    console.log("the year is not leapyear: ",y);

