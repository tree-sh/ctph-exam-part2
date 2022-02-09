const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let result = 0;

  readline.question('>> ', (input) => compute2(input)); //solution2 (compare2) is used, can be switched with solution1 (compute) 

  /**
   * SOLUTION 1: IF STATEMENTS
   */
  function compute(input)
  {
    const inputArray = input.split(" ");
    const [operation, operand1, operand2] = inputArray;
    const num1 = parseFloat(operand1);
    const num2 = operand2 ? parseFloat(operand2) : operand2;
    
      if(operation === "add")
      {
        result = !num2 ? result + num1 : num1 + num2;
      }else if(operation === "sub")
      {
        result = !num2 ? result - num1 : num1 - num2;
      }else if(operation === "mul")
      {
        result = !num2 ? result - num1 : num1 * num2;
      }else if(operation === "div")
      {
        result = !num2 ? result / num1 : num1 / num2;
      }
      console.log(result);
      readline.question('>> ', (input) => compute(input));
  }

  /**
   * SOLUTION 2: CONVERT STRING TO EXPRESSION
   * Caveat: Using eval() has risks
   */

   const operatorMap = new Map([
       [ "add", "+" ],
       [ "sub", "-" ],
       [ "mul", "*" ],
       [ "div", "/" ]
   ]);
  function compute2(input)
  {
    const inputArray = input.split(" ");
    const [operation, operand1, operand2] = inputArray;
    const num1 = parseFloat(operand1);
    const num2 = operand2 ? parseFloat(operand2) : operand2;

    result = !num2 ? eval(result + operatorMap.get(operation) + num1) : eval(num1 + operatorMap.get(operation) + num2);
    console.log(result);
    readline.question('>> ', (input) => compute2(input));
  }

  