/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.


Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age) {
    if (age >= 18 ) {
        return 'adult'
    }
    else {
        return'minor'
    }
    
 }

//return is used to send a value back to the function caller.

console.log('Exercise 2 Result:', isAdult(21))
 

let sum = 0;
function add(a, b) {
   sum=a+b 
   return sum; // This outputs the sum to the console
}

console.log('example 0 Result:', add(3, 5))

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument.
 It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char0) {
    //char0 = char0.toLowerCase()
    if (char0 === 'a' || char0 === 'e' || char0 === 'o ' || char0 === 'i' || char0 === 'u') {
        return true
    }
        else { 
        return false
    }
            
    }


console.log('Exercise 3 Result:', isCharAVowel("A"))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
    return `${name}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, time) {
   return `good ${time}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if  (num2 > num1 && num2 > num3) {
        return num2
    }
     else if  (num3 > num1 && num3 > num2) {
        return num3
    }
     
    }


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(amount, tip) {
    return `the tip amount is ${amount*tip/100}`
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp, scale) {
     scale = scale.toUpperCase();
    if (scale == 'C') {
    return `fahrenheit is ${temp*(9/5) + 32}`
    }
    else if (scale == 'F') {
        return `celsius is ${(temp-32)*(5/9)}`
    }
}


console.log('Exercise 8 Result:', convertTemperature(32, "c"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Error: Division by zero is not allowed.';
        }
    } else {
        return 'Error: Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
    }
}



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

