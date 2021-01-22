/* You don't know JS
Up & going

JavaScript is interpreted language - JS engine compiles the program on the fly and then runs the compiled code immediatly


2            - literal value expression
b            - variable expression
b * 2        - arithmetic expression
a = b * 2    - assignment expression 

+= -= *= /=  - compound assigment
obj["a"]     - object property access


static typing (type enforcement) - variable holds only one type
dynamic typing (weak typing)  - variable can hold any type of value at any time 

By convention JS constants are capitalized with underscores _ between multiple words:
const TAX_RATE = "23";


Types:
- string
- number
- boolean
- null and undefined
- object
- symbol (new to ES6)


typeof a - returns type of variable

typeof null => object

Objects:

var obj = {
    a: "hello",
    b: 42,
    c: true
};

obj.a;       - hello world
obj["a"];    - hello world, a - key
obj.b;       - 42
obj["b"];    - 42

Arrays:

var arr = [
    "hello",
    42,
    true
];

arr[0];
arr.length     - 3
typeof arr    - object

Functions:

function foo() {
    return 42;
}

foo.bar = "yoyoyo";

typeof foo;      - function
typeof foo();    - number: 42
typeof foo.bar;  - string


Coercion - conversion between types

explicit - jawna

var a = "99.99";
var b = number(a);
a == b;

implicit - niejawna

var a = "42";
var b = a * 1;      - implicitly coerced to 42

"99.99" == 99.99;     - left-hand side is converted to number - 99.99 


Coersion to bool:

"thruthy":
- "test",
- 42,
- true,
- arrays,
- objects,
- functions

"falsy":
- "",
- 0, -0, NaN,
- null, undefined,
- false

Equality:

=== strict equality
== loose equality - implicit coersion allowed

var a = "42";
var b = 42;

a == b; // true
a === b; // false

==, === check reference equality for non-primitive types, not the value
arrays are coerced to strings with commas in beetween!!:
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c; // true
b == c; // true
a == b; // false

Inequality:

no strict inequality
var a = 42;
var b = "foo";

42 < foo ; // false => 42 < NaN 

NaN cannot be geater or lower

strings can be used in comparison with numbers.
For 2 strings comparison is made lexicogrpahically (alphabetically) - letters coerced to numbers then compared 

Function scopes:

Hoisting - JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

var a = 2;

foo();      - works because foo() declaration is hoisted

function foo() {
    a = 3;
    console.log(a); // 3
    var a;          - declartation is "hoisted" to the top of 'foo()'
}

console.log(a); // 2

Strict mode - JavaScript will not tolerate the usage of variables before they are declared.
'use strict';

LET - declare variables to belong to invidual blocks '{  }'

function foo() {
    a = 1;          - b is not avaiable here

    if (a >= 1) {
        let b = 2;  - b only available in if { } brackets

        while (b < 5){
            let c = b * 2;  - c only avaible in while { } brackets
            b++;

            console.log(a+c);
        }
    }
}

foo(); // 5 7 9 



*/