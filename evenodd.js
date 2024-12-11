const prompt=require('prompt-sync')();

var n=parseInt(prompt("Enter the number to chekc: "));

{if(n%2==0)
    console.log("The number is even: ");
else
    console.log("the numbe is odd",n);
}