Math.random();
// returns a number 0-1
// math is the library
console.log("Hi There!");

let amount = 6;
let price = 4.99;

let.message = "good nite";
console.log(message.length);

console.log(howdy.length);

let lateToWork = true;
//boolean

console.log(Math.random());
//prints:0-0.9

console.log(MAth.floor(5.95));
prints: 5;

let x = null;

const daysLeftOver = 365 % 7;

//modulo operator

//Variables
//var used in pre ES6 version of JS
//let can be reassigned
// const constant value

const found = trye;
//cannot be reassigned

let name = "Tammy";
let count;
console.log(count); //prints undefined
let count = 10;
console.log(count); //prints 10

var a; //DEclared variables can be undefines
console.log(a);

//Assignment Operators
let number = 100;
//both add 10
number = number + 10;
number += 10;
// +=  addition
// -= substraction
// *= multiplication
// /= division

//String Concatenators
let service = "credit card";
let month = "May 3oth";
let displayText = "Your " + service + "bill is due on " + month + ".";
console.log(displayText);

//String interpolation
let age = 7;
("Tommy is ${age} years old");

//template literals
let name = "CodeAcademy";
console.log(`Hello, ${name}`); //prints Hello, CodeAcademy BACTICK!
console.log(`Billy is  ${6 + 9} years old`);

//Logical Operators
true || false; //true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; //false

//Ternary operator
let price = 10.5;
let day = "Monday";
day === "Monday" ? (price -= 1.5) : (price += 1.5);

//If statements
if (true) {
  console.log("this message will print");
} //

//If ELSE
if (false) {
  console.log("The code in this block will not run.");
} else {
  console.log("But the code in this block will!");
}

// Prints: But the code in this block will!

let sale = true;
sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

//Comparisson operators
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

/*Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
*/

//LOGICAL OPERATORS

/*the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!) */
if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}

if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Do some work.");
}

let mood = "sleepy";
let tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

//Trutrhy or FALSY
let myVariable = "I Exist!";

if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist.");
}

/*
-0
-Empty strings like "" or ''
-null which represent when there is no value at all
-undefined which represent when a declared variable lacks a value
-NaN, or Not a Number */

let numberOfApples = 0;

if (numberOfApples) {
  console.log("Let us eat apples!");
} else {
  console.log("No apples left!");
}

// Prints 'No apples left!'

let wordCount = 3;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}
//OR

//Short circuit evaluation
let defaultName = username || "Stranger";
//because it checks left side of  operator first

let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

//TERNARY OPERATORS

let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

//OR
isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");

/*The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.*/

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

//ELSE IF STATEMENTS
let stopLight = "yellow";

if (stopLight === "red") {
  console.log("Stop!");
} else if (stopLight === "yellow") {
  console.log("Slow down.");
} else if (stopLight === "green") {
  console.log("Go!");
} else {
  console.log("Caution, unknown!");
}

//SWITCH Statements
let groceryItem = "papaya";

if (groceryItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papayas are $1.29");
} else {
  console.log("Invalid item");
}
//OR
let groceryItem = "papaya";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}

// Prints 'Papayas are $1.29'
/*the switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run
*/
let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//Fuctions

const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

// hoisting: allow the function to be called even before it has been declared not good practice
getReminder();

function getReminder() {
  console.log("Water the plants.");
}

greetInSpanish();

function greetInSpanish() {
  console.log("Buenas Tardes.");
}
// to execute the function you have to call the function
getGreeting();
function getGreeting() {
  console.log("Hello, World!!");
}
//functions can take parameters as inputs, inside the brackets

function calculateArea(width, height) {
  console.log(width * height);
}

calculateArea(10, 6);

//functions can use default parameters, a predetermined value, in case the argument is undefined when function is called

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

// how to save output of a function as a new variable
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Helper functions
//functions being called within another function

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59

//other example
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//function expression
// cannot be hoisted and has to be called
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater("Tuesday"));

const waterCheck = plantNeedsWater("Tuesday");
console.log(waterCheck);

//Arrow functions
//remove the need for the word function
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7

// Arrow function with no arguments
const printHello = () => {
  console.log("hello");
};
printHello(); // Prints: hello

// Arrow functions with a single argument
const checkWeight = (weight) => {
  console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

// Named function
function rocketToMars() {
  return "BOOM!";
}

// Anonymous function
const rocketToMars = function () {
  return "BOOM!";
};
/*Function Parameters
Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters.
*/

// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}
//So if we have a function:

const squareNum = (num) => {
  return num * num;
};
//We can refactor the function to:

const squareNum = (num) => num * num;

//SCOPE
//Defines where variables can be acessed or referenced
//Global variables are outside of the function block
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());

//Block Scope
//We say that variable has block scope because it is only accessible to the lines of code within that block

//too many can cause scope pollution in the global namespace
const logSkyColor = () => {
  let color = "blue";
  console.log(color); // blue
};

logSkyColor(); // blue
console.log(color); // ReferenceError

//ARRAYS
//for organizing and storing data in lists in numbered position

let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];
//index is the numbered position it starts in 0
const hello = "Hello World";
console.log(hello[6]);
// Output: W

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Update elements inside an array
let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//Variables declared with the const keyword cannot be reassigned.
//However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];

utensils[3] = "Spoon";
console.log(utensils);

//.length property
const objectives = ["Learn a new languages", "Read 52 books", "Run a marathon"];
console.log(objectives.length);

//.push method

const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3", "item 4");

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//other example
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("water plants", "enjoy");

console.log(chores);

//.pop method
//removes the last item in the array

const newItemTracker = ["item 0", "item 1", "item 2"];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//or
const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

const removed = chores.pop();

chores.pop();
console.log(chores);
console.log(removed);

//.shift();
//removes the first item

//.unshift(elemento a agregar);
// adds the element to the first place in the klist

//.slice(index desde, hasta uno menos q este);

//.indexOf(nombre de array);
//para saber en que numero esta ese elemento adentro de la lista

//FUNCTIONS AND ARRAYS

const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);

console.log(flowers);
// Output: ['peony', 'daffodil', 'marigold', 'lily']

//OR
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);

console.log(concept);

//OR
const removeElement = (newArr) => {
  newArr.pop();
};

removeElement(concept);

console.log(concept);

//NESTED ARRAYS

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2. ACCESA EL SEGUNDO ARRAY Y EL PRIMER VALOR

//OR
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];

/*Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation. */
