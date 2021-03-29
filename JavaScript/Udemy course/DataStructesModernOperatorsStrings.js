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


// 3. The Spread Operator '...'


Similar to destructuring  ( it helps to get out elements from arrarys ) but spread operator always takes ALL the elements from array.
Actually works not only on arrays but also on all iterables : arrays, strings, maps, sets.. but NOT OBJECTS!

Use cases:
1. Passing multiple elements into functions 
2. Expending arrays with new elements

Shallow copy:

const copy = [...arr];

Expending elements in arrays:

constr arr = [7, 8, 9];
const badNewArr = [1, 2 , arr[0], arr[1], arr[2]];    ===============>     const newArr = [1, 2, ...arr];
console.log(badNewArr); // [1 2 7 8 9]                                     console.log(newArr); // [1 2 7 8 9]

Also useful in passing multiple elements in functions as arguments:

console.log(arr[0], arr[1], arr[2]);  =================>   console.log(...arr); // 7 8 9 

Joining 2 arrays or more:

const joinArr = [...arr, ...newArr];

Cannot be used in building strings in template literals:

const str = "domi";

console.log(\`\${...str}\`); // unexpected token: ...

Building new objects:

const restaurant = {
  name: "domi pizza",
  categories: ["pizza", "pasta", "italian"]
};

const newResturant = [fundedIn: 1999, ...resturant, founder: 'Marco Polo'];

const restuarantCopy = {...restaurant };
restaurantCopy.name = "2137 pizza delivery";
console.log(restaurant.name); // "domi pizza";
console.log(restaurantCopy.name); // "2137 pizza delivery";


// 4. Rest Pattern and Parameters

Rest pattern - looks like spread operator (same syntax '...') but does exactly opposite than spread operator. 
Takes multiple elements and condese them into an array (pack elements into array).

SPREAD, because onm RIGHT side of =
const arr = [1, 2, ...[3,4]];

REST, becuase on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

Objects:

const openingHours = {
  thursday: {
    open: 12,
    close: 22
  },
  friday: {
    open: 10,
    close: 24
  },
  saturday: {
    open: 8,
    close: 22
  }
};

const {saturday, ...weekdays} = openingHours;
console.log(weekdays); // {friday: {..}, thursday: {..}}

Functions:

const add = function (...numbers){
  let sum = 0;
  for(let i =0; i<numbers.length; i++)
  sum +=numbers[i];
};

add(2,3);
add(8,3,4,67,88);

const args = [23,5,6];
add(...args); // REST Parameters


// 5. Short Circuting && and ||

Logical operators:
- use any data type,
- return any data type,
- short circuting - short circut evaluation

For || it takes first truthy and returns its value or the last value if all falsy:

console.log(3 || "domi"); // 3  (not true!)
console.log('' || "domi")// "domi" ( '' - falsy value ) 
console.log(true || 0); // true 
console.log(undefined || null); // null
console.log(undefined || 0 || '' || null || "yo");  //   "yo"
console.log(undefined || 0 || '' || null); // null !!!

For && it takes first falsy and returns its value or the last value if all truthy:

console.log(3 && "domi"); // "domi"
console.log('' && "domi")// '' ( '' - falsy value ) 
console.log(true && 0); // 0
console.log(undefined && null); // undefined
console.log('yrdy' && 1 && 323 && null && "yo");  //   'null'
console.log('yrdy' && 1 && 323 && "yo"); // "yo" !!!


// 6. Nullish Coalescing Operator (??)

const numGuests = 0;  // falsy value
const guests = numGuests || 10;
console.log(guests); // 10 because 0 is falsy 

const guestsCorrect = numGuests ?? 10;
console.log(guestsCorrect); // 0 because it checks only for null and undefined, not truthy like ||


// 7. For-of loop

New way of looping of the arrays (similar to foreach in C#). It's possible to use 'continue' or 'break' inside the for-of loops. 


const arr = [7, 8, 9];
for (const item of arr) console.log(item); //  7 8 9

It's also possible to get index of element!! :

for (const item of arr.entries()) {
  console.log(\`index: \${item[0]}, value: \${item[1]}\`);         /// index: 0, value: 7 etc.  
}

item => [index, value]

console.log([...arr.entries()]);

for(let [index, value] of arr.entries()) {
  console.log(\`\${index} => \${value}\`);
}


// 8. Enhanced Object Literals

1st enhancement - shorter variable declarations in objects:
const obj = {
  test: 1,
  name: 'ty'
}

Before ES6:                                   In ES6:

const example = {           ================>  const example = {
  obj = obj                                       obj             // no need to specify, will take from parent scope
}                                              }

console.log(example.obj); // {test: 1, name: 'ty'}

2nd enhancement - shorter functions property declarations in objects:

Before ES6:                                   In ES6:

const example = {           ================>  const example = {
  order: function(test){                        order(test) {
  return 'pizza';                                 return 'pizza';
  }                                             }
}                                              }

3rd enhancement:

const wedays = ['mon','tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close, 22,
  },
  [\`day-\${2+4}\`]: {
    open: 0,
    close: 12 + 12,
  }
}


// 9. Optional chaining '?.'

similar to c# feature but if value doesn't exist it returns undefined.                                                  


Methods:

restaurant.order?.(0, 1) - will be called only if exists otherwise returns undefined

Arrays:

const users = [
  {
    name: 'domi', email: 'blabla@gass.pl'
  }
]
console.log(users[0]?.name ?? 'User array empty');


// 10. Looping Objects: Object Keys, values, entries

Property names (keys):

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close, 22,
  },
  [\`day-\${2+4}\`]: {
    open: 0,
    close: 12 + 12,
  }
}

for (const day of Object.keys(openingHours)) {
  const.log(day); // thu fri sat
}

Property values:
const values = Object.values(openingHours);
console.log(values); // [ {open: 12, close 12}, {...}, {open: 0, close: 24} ]

Entire object:

const entries = Object.entries(openingHours);   // Creates key value pairs in array


// 11. Sets

New ES6 data structure. Collection of unique values! Order of elements is irrelevant (no indexes). Iterable is passed in constructor.

const orders = ['pasta', 'pizza', 'pizza', 'risoto', 'pasta', 'pizza'];
const ordersSet = new Set(orders);

console.log(ordersSet); // {'pasta', 'pizza', 'risoto'} - no duplicates

ordersSet.size // 3 - not length
ordersSet.has('pizza'); // true
ordersSet.add('lasagne');
ordersSet.delete('risoto');
ordersSet.clear();

Unique values:

const ordersUnique = [...new Set(orders)];
const charsUnique = new Set('dominik').size; 


// 12. Maps

New ES6 data stracture. Key-value pair collection. Like dictionary in C# but can store diffrerent object types. Objects are like maps with strings as keys.

const rest = new Map();
rest.set('name', 'domi pizza');
rest set(1, 'Krakow');
rest.set(2, 'Rzeszow');

rest
    .set('categories', ['italian', 'pizzeria', 'vege'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed);

rest.get('name'); // 'domi pizza'
rest.size;
rest.has(1); // true
rest.delete(2);
rest.clear();

Convert object to map:

const hoursMap = new Map(Object.entries(openingHours));

Convert map to array:

console.log([...question]);

// 13. Other data structures

Built-in:
- WeakSet,
- WeakMap

Non-built-in:
- Stacks,
- Queues,
- Linked lists,
- Trees,
- Hash tables

Sets have higher performance than arrays. Analogically maps higher than objects.


// 14. Working with strings

slice == substring in c#
indexOf(..), lastIndexOf(..), toLowerCase(), toUpperCase(), trim(), repalce(.. , ..), includes('..'), 
startsWith('..'), endsWith('..'), split(..), join('..'), padStart(int, '..'), padEnd(int '..') - padding ex. +++++TEST+++++
repeat(int)

const airline = 'TAP Air Portugal';
ariline.slice(4, 7); // 'Air'
airline.slice(-2); // 'al' - negative index starts from the end
airline.slice(1, -1); // 'AP Air Portuga'

Boxing - JS takes primitive string and wraps it into the object. Therefore string object methods works on primitive strings 

In the newest JS replaceAll(.. , ..) should be introduced. The workaround is using regular expression;




-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

const game = {
  team1: "Bayern Munich",
  team2: "PSG",
  players: [
    ['Neuer', 'Sule', 'Pavard', 'Boateng', 'Davies', 'Kimmich', 'Muller', 'Goretzka', 'Gnarby', 'Sane', 'Robercik'],
    ['Navas', 'Kimpembe', 'Kehrer', 'Bernat', 'Kurzawa', 'Verratti', 'Di Maria', 'Rafinha', 'Icardi', 'Neymar', 'Mbappe']
  ],
  score: '4:0',
  scored: ['Robercik', 'Gnarby', 'Robercik', 'Mbappe', 'Kimmich', 'Robercik'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function(...players) {
    console.log(players);
    let goalsCount = 0;
    let scorers = [];
    for(let i=0; i < this.scored.length; i++) {
      players.find(x => this.scored[i] == x) && (goalsCount++ & scorers.push(this.scored[i]));
    }
    console.log(`${goalsCount} goals were scored by ${scorers}`);

  }
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playerFinals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playerFinals);

const {odds: {team1, x:draw, team2 }} = game;
console.log(team1, draw, team2);

game.printGoals('Davies', 'Mbappe', 'Robercik', 'Kimmich');

team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 2 is more likely to win');

for (const [index, value] of game.scored.entries()) {
  console.log(`Goal ${index}: ${value}`);
}

let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
console.log(average/Object.values(game.odds).length);


let passanger = 'door';
passanger = passanger.toLowerCase();
passanger = passanger[0].toUpperCase() + passanger.slice(1);

const regex = new RegExp('door', 'i');

console.log(passanger.replace(regex, 'x'));

document.body.append(document.createElement('textarea'));
let btn = document.createElement('button');
btn.style.width = '50px';
btn.innerText = 'test';
document.body.append(btn);

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  for (const [i, row] of text.split('\n').entries()){

    let [first, second] = row.toLowerCase().trim().split('_');
    second = second.replace(second[0], second[0].toUpperCase());
    console.log([first, second].join(''));
  }
});



