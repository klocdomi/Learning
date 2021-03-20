document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Engine & Runtime

Engine - program that executes JS code. Contains call stack and heap. 

Compilation - enitre source code is converted into machine code at once, and written to a binary file that can be executed by computer

                compilation                     execution 
[Source code] ==============> [Machine code] =============> [program running] 
                                some portable file

Interpretation - interpreter runs through the source code and executes it line by line

                            execution line by line 
[Source code]  ===========================================> [program running]


!!! JS used to be interpeted language but modern JS introduced JIT compilation 

JIT compilation (just in time) - entire code is converted into machine code at once, then executed immediatly


                compilation                     execution 
[Source code] ==============> [Machine code] =============> [program running] 
                                no portable file                    ||
                                    ||                              ||
                                      <=============================
                                                optimization


There's code parsing before compilation - spliting lines of code into pieces stored as Absract syntax tree (ABT). That representaion it's what engine understands and compiles into machine code.

During execution engine optimezes machine code compilation so it should speed up after some time. That happens in some special threads.

JS Runtime in the browser:
- JS Engine - call stack + heap,
- WEB APIs (DOM, timers, console.log, etc.) are provided by browser not by engine. It's not part of JS language,
- callback queue - callback functions that are ready to be executed, waiitng for events (onclick, timer, data, etc.)
- Event loop - takes functions from callback queue and put them into call stack where executions happens. EL is essential for non-blocking concurrency model
                    

// 2. Execution contexts & Call stack

Execution context - environment in which a piece of JS is executed. Stores all the necesssary information for some code to be executed.

Execution process:
1. Creation of global execution context ( for top-level code - not inside any functions )
2. Execution of top-level code
3. Execution of functions and waiting for callbacks ( one execution context per function - each function call creates a new context )

Execution context contains:
- variable environment ( declarations, functions, 'arguments' object ),
- scope chain,
- 'this' keyword ( not in arrow functions )

Call stack - place where execution contexts get stacked on top of each other to keep of track where we are in the execution
JS has only one thread of execution


// 3. Scope & Scope chain

Scoping - a way of organizing variables and access to them 
Scope - space or environment in which a certain variable is declared (variable env in case of functions)
Scope of variable - region of the code where a certain variable can be accessed

Scope != Scope of a variable

Lexical scoping - controlled by placement of functions and blocks in the code ( access to variables inside )

If you try to access variable which is outside the current scope then 'Reference error' will be thrown.

Scope types:
- global scope - vars declared outsiede of any function or block, accessible everywhere
- function scope - aka local scope, vars are accesible only inside function, not outside
- block scope (ES6) - variables are accesible only inside the block but it only applies to 'let' and 'const' variables (block scoped). 'var' is function scope.
Functions are also block scoped (only in strict mode!!)

Scope chain - order in which functions are written in the code. Every scope always has access to variables from parent scope (up to global scope). 
However parent scope doesn't have access to child ones. Variables are looked up in the scope chain. 

Scope chain has nothing to do with order in which functions were called.


// 4. Hoisting & TDZ

Hoisting - makes some types of variables accessible/usable in the code before they are actually declared (mainly for using functions before actual declaration).
Before execution, code is scanned for var declarations, and for each var,  a new property is created in the variable environment object.

TDZ (temporal dead zone) - introduced to avoid and make it easier to catch errors. Accesing 'let/const' variable before declaration

                                   HOISTED?             INITIAL VALUE                SCOPE

function declarations                yes               Actual function              Block (in stric mode, otherwise Function)

'var' variables                      yes                   undefined                Function

'let' and 'const' variables          no                 uninitialized (TDZ)         Block

function expressions and arrows      [      depends if using 'var' or 'let/const'          ]        


// 5. 'this' keyword

this - special variable that is created for every execution context. 'Points to the object that called the function'. It's not static

In methods 'this' will point to object that is calling the function
In simple function call using 'this' returns undefined in strict mode. In sloppy window object (in the browser).
In event listeners 'this' points to DOM element that the handler is attached to.
Arrow functions don't get their own 'this' keyword but use lexical 'this' (parent scope of the function).


// 6. Regular vs Arrow functions

Arrow functions are useful for nested functions in the object. Arrow function doesn't have its own 'this' so it points to parent object

Example:

Regular function:

const domi =  {
  firstName = 'domi',
  year = 1995,
  calcAge: function () {
    console.log(2021- this.year);

    const isMillenial = function() {
      console.log(this);    // undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // cannot find year property
  }
};

and now using arrow function:

const domi =  {
  firstName = 'domi',
  year = 1995,
  calcAge: function () {
    console.log(2021- this.year);

    const isMillenial = () => {
      console.log(this);    // domi object
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // true
  }
};

'arguments' keyword - points to arguments passed in function call. Only available in regular functions.

Example:

const addExpr = function (a,b) {
  console.log(arguments); 
  return a + b;
}

addExpr(2,5); //array with '2' and '5'
addExpr(2,5,6,7); //array with 2, 5 ,6 and 7

!!! Doesn't work for arrow functions - reference error is thrown

const addArrow = (a,b) => {
  console.log(arguments); 
  return a + b;
}

addArrow(2,5); // reference error in console.log


// 7. Primitives vs Objects

Primitive types:
- Number,
- String,
- Boolean,
- Undefined,
- Null,
- Symbol,
- BigInt

Reference types:
- Object literal,
- Array,
- Functions,
- Many more..

Primitves are stored in execution contexts where are declared (call stack). Meanwhile reference types (objects) in the heap.

Both have 'Identifier', 'Address' and 'Value' in callstack but objects' value is the address to memory in the heap, which stores 'real value' of the object.

Example:

let age = 25;
let name = "Domi";

const me = {
  this.age: age,
  this.name: name
};

let friend = me;


                    CALL STACK                                                                 HEAP

Identifier            Address               Value                                   Address               Value 

age                   0001                    25                                    D30F                  { age: 25, name: "Domi" }
name                  0002                    "Domi"
me, friend            0003                    D30F                =======>           


me.age = 12; // possible even if 'me' object is declared as 'const' because value is still unchanged in call stack (reference to the heap). 
                Only heap's value is changed but address is still the same

me = {}; // typerror because const variable, changing value in call stack (object's address)


const newMe = Object.assign({}, me); // merges two objects, 
                                        shallow copy (only works on object with primitive properties - if me object has nested objects inside, 
                                        the references would still point to old object properties)

-----------------------------------------------------------------------------------------
` + "</code></pre>";