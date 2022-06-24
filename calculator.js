// Program for a simple calculator

let result;

while (true){

    // take operator input
    const operator = prompt('Enter operator ( either  +,  -,  *  or  / ): ');

    if (operator == '+'){
        // take the operand input
        const number1 = parseFloat(prompt('Enter first number: '));
        const number2 = parseFloat(prompt('Enter second number: '));
        result = number1 + number2;
    
        // display the result
        window.alert(number1 + ' ' + operator + ' ' + number2 + ' ' + '=' + ' ' + result);
        break;
    }
    else if (operator == '-'){
        // take the operand input
        const number1 = parseFloat(prompt('Enter first number: '));
        const number2 = parseFloat(prompt('Enter second number: '));
        result = number1 - number2;
    
        // display the result
        window.alert(number1 + ' ' + operator + ' ' + number2 + ' ' + '=' + ' ' + result);
        break;
    }
    else if (operator == '*'){
        // take the operand input
        const number1 = parseFloat(prompt('Enter first number: '));
        const number2 = parseFloat(prompt('Enter second number: '));
        result = number1 * number2;
    
        // display the result
        window.alert(number1 + ' ' + operator + ' ' + number2 + ' ' + '=' + ' ' + result);
        break;
    }
    else if (operator == '/') {
         // take the operand input
         const number1 = parseFloat(prompt('Enter first number: '));
         const number2 = parseFloat(prompt('Enter second number: '));
        result = number1 / number2;
    
        // display the result
        window.alert(number1 + ' ' + operator + ' ' + number2 + ' ' + '=' + ' ' + result);
        break;
    }
    else{
        window.alert('Invalid operator');
    }
    continue;
}