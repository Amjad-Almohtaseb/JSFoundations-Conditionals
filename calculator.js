const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const num1 =parseFloat(prompt("Please enter the first number: "));
const num2 = parseFloat(prompt("Please enter the second number: "));
const operation = prompt ('Please choose the operation (+, -, /, *): ');
N1 = isNaN(num1);
N2 = isNaN(num2);
if (N1  || N2 ){
    console.log('the numbers were invalid. ');
}
else if (operation==='+')
    console.log(num1+num2) ; 
else if (operation==='-')
    console.log(num1-num2) ;
else if (operation==='*')
    console.log(num1*num2) ;
else if (operation==='/'){
    if (num2==0)
        console.log ('the denominator should not be zero');
    
    else{
    console.log(num1/num2) ;

    }
}
else {
 console.log ('operation is not valid.');
}