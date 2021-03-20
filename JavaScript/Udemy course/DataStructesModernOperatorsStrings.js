document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Destructuring Arrays

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];           ============>         const [x, y, z] = arr;
const c = arr[2];

const [first, , third] = arr;     // first = 2, third = 4 

Easy way to switch variables' values (no need to 'temp' variable):

const temp = first;
first = third;              ============>       [third, first] = [first, third];
third = first;

It is possible to recieve multiple results from the function:

let restaurant = {
  order: function(starter, main) {
      return starter, main;
  };
};

var [starter, main] = restaurant.order("cavior", "pizza");

Nested arrays:

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i,j); //  2  [5,6]

const [a, , [b, c]] = nested;
console.log(a, b, c); // 2  5  6

Default values:
const [p = 1, q = 2, r] = [8];
console.log(p, q, r); // 8  2  undefined


// 2. Destructuring Objects

const restaurant = {
  name: "domi pizza",
  categories: ["pizza", "pasta", "italian"]
};

const {name, categories} = restaurant;
console.log(name, categories); // "domi pizza"    ["pizza", "pasta", "italian"]

Setting new names for variables:

const {name: RestaurantName, categories: Food} = restaurant;
console.log(RestaurantName, Food); // "domi pizza"    ["pizza", "pasta", "italian"]

Default values:

const {startes = ["cavior", "garlic stick breads"], name, categories} = restaurant;
console.log(starters); // ["cavior", "garlic stick breads"]

Mutating variables:

let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14
};

{a, b} = obj; // syntax error, unexpected '='
({a, b} = obj); // works

Nested objects:

const openingHours = {
  friday: {
    open: 10,
    close: 24
  }
  saturday: {
    open: 8,
    close: 22
  }
};

const {
  friday: {open, close},
} = openingHours;

console.log(open,close); //  10    24









-----------------------------------------------------------------------------------------
` + "</code></pre>";