document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Default Parameters

const bookings  = [];
const createBooking = function (flightNum, numPassegners = 1, price = 199 * numPassegners) {
  const booking = {
    flightNum,
    numPassegners,
    price
  };
  bookings.push(booking);
};

createBooking('LH123');

Skipping passing parameter:

createBooking('LH123', undefined, 200); // numPassegners = 1 

// 2. Passing arguments into functions: primitives vs references

Reassigning argument value inside the function can have different effects. It depends on argument's type:
- primitives - changing argument value doesn't change parameter value
- references - changing argument value changes parameeter value

ex. :

const flight = 'LH123';
const domi = {
  name = 'domi';
};
                            copy      reference

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';                                   
  passenger.name = 'Mr. ' + 'passenger.name;
};

checkIn(flight, domi);
console.log(flight); // 'LH123' - unchanged
console.log(domi); // { name: 'Mr. domi'} - changed


// 3. First-Class and Higher-Order functions

JS treats first-class functions as 'values' and another type of object.

Store functions in variables or properties:

const counter = {
  value: 23,
  inc: function() {this.value++;}
};

const add = (a,b) => a + b;

Pass functions as args to other functions:

const greet = () => console.log('hey');
btnClose.addEventListener('click', greet);

Return fucntions from functions.

Call methods on functions:

counter.inc.bind(someOtherObj);

Higher-order functions - a function that recieves another functions as an argument, that returns a new function, or both

1. Function that recieves another fucntion

const greet = () => console.log('hey');
btnClose.addEventListener('click', greet);
                ||                   ||
          Higher-Order func       Callback func

2. Function that returns new function

        Higher-Order func
            ||
function count() { 
  let counter = 0;
  return function() {
    counter++;
  };
};

funcs have propreties ex. name

const greet = function(greeting) {
  return function (name) {                    ===============>        const greetArrow = greeting => name => console.log(\`\${greeting} \${name}\`);
    console.log(\`\${greeting} \${name}\`);
  };
};
                                                            
const greeterHey = greet('Hey');
greeterHey('domi');
greet('Hello')('bulbosaur');


// 4. Call, apply & bind methods

call - is being used to set explicitly 'this' keyword of the function we're going to call

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH'
  booking: [],
  book(flightNum, name) {
    console.log(\`\${name} booked a seat on \${this.airline} flight \${this.iataCode}\${flightNum});
    this.bookings.push({flight: \`\${this.iataCode}\${flightNum}\`, name})
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW'
  booking: [],
};

lufhtansa.book(233, 'domi'); 
lufthansa.book.call(eurowings, 233, 'domi');
                      ||
              setting 'this' obj


apply - almost the same as 'call' by it takes array as parameters. Not used in modern JS - call + spread operator is more common

const flightData = [323, 'George Bush'];
lufthansa.book.apply(eurowings, flightData);       ==========>      lufhansa.book.call(eurowings, ...flightData);

bind - it also manually sets the 'this' keyword for any function call but what's more it returns new function!

const bookEw = book.bind(eurowings);  - new function, 'this' => eurowings obj

partial application pattern - specyfing part of arguments beforehand:

constbookEW23 = lufthansa.book.bind(eurowings, 23);
bookEW23('domi'); // flightNum = 23
bookEw23('lee');

bind(null, ..) - if 'this' is not needed


// 5. IIFE - immediatly invoked function expressions

functions that are executed immediatly and just only once. Used to hide scopes (make variables unaccessible)

(function () {
  console.log('ok boomer');
})();

(() => console.log('ok boomer'))();


// 6. Closures

Closure - variable environment attached to the function, exactly as it was at the time and place the function was created 
Any function always has access to the variable environment of the execution context in which the fucntion was created, evemn after that execution context is gone
Closure has priority over scope chain - variables defined in closure will overwrite ones from global scope?

const secureBooking = function () {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(\`\${passangerCount} passengers\`);
  };
};

const booker = secureBooking();
booker(); // 1 passengers
booker(); // 2 passengers

console.dir(booker); - show function in console, can peek at function's scopes. Double brackets properties ([[Scopes]]) are unaccesible in the code

-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

const greet = function(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('domi');
greet('Hello')('bulbosaur');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('hey')('domi');

(function () {
  document.body.append(document.createElement('h1'));
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.innerText = "VERSTAPPEN > HAMILTON";
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = header.style.color == 'blue' ? 'red' : 'blue';
  } );
})();