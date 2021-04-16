document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Simple Array Methods

Method that does'nt mutate original array:
- slice(),
- join()

Method that mutate originial array:
- reverse(),
- concat(),

let arr = ['a', 'b', 'c', 'd', 'e'];

splice(start, deleteCount, item1, item2, ...) - changes the content of an array by removing, adding or replacing exisiting elements. ALSO it mutates orginal array:

arr.slice(2);
console.log(arr); // ['a', 'b', 'c', 'd', 'e']
arr.splice(2);
console.log(arr); // ['a' 'b']

// 2. Looping arrays: ForEach

ForEach loops cannot be stopped with break, or continue!


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements){
    ...
}
                    callback function
                        ||
movements.forEach(function (movement) {          // a bit like LINQ in C#
    ...
}));

movements.forEach(function (movement, index, array) {
    ...
}));


Maps:

const currencies = new Map ( [
    ['USD', 'dollars'],
    ['EUR', 'euros'],
    ['GBP', 'pounds'],
]);

currencies.forEach(function (value, key, map) {
    console.log(\`\${key}: \${value}\`);
});

Sets:

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, key, map){
    console.log(\`\${key}: \${value}\`); // USD: USD, GBP: GBP ... - value and key is the same
});


// 3. Data transformations with Map, Filter and Reduce

map() - returns a new array containing the results of applying an operation on all orignal arary elements

const arr = [1, 2, 3]; 

const arr2 = arr.map(function(element){
    return element * 2;
}); // [2, 4, 6]

filter() - rerutnrs a new array conitaining the array elemts that passed specified test condition

const arr2 = arr.filter(function (element) {
    return element > 2;
}); // [3]

reduce() - reduces all array elements down to one single value( eg. adding all values together)

const arr2 = arr.reduce(function(acc, cur, i, arr) {
    return acc + cur;
}, 0); // 6

// 4. Find method

find() - returns first element which meets condtions
const firstWithdrawal = arr.find(mov => mov < 0); // -400

// 4. Some and every

// checks for equality
movements.includes(-130);

// checks if any element of array satisfies the condition
movements.some(mov => mov > 1500);

// checks if every element of array satisfies the condition
movements.every(mov =>)

// 5. Flat and flatMap

flat - moves elements from nested array to main array, can take Number parameter which specifies nesting level

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

flatMap - first calling map() then flat() but only for first level

const balance1 = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);

const balance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);

// 6. Sorting arrays

sort() - works for strings but not for numbers (coersion to strings), sort() mutates the array

const owners = ['jon', 'domi', 'polak mateo'];
console.log(owners.sort()); // domi, jon, polak mateo

Workaround for numbers :

// Ascending 
movements.sort( (a,b) => {
    if (a > b) return 1; // switch order
    if (b < a) return -1; // keep order
})

movements.sort( (a,b) => a - b); // works like above beacause it doesn;t check numbers value but if its positive

// Descending
movements.sort( (a,b) => {
    if (a < b) return 1; // switch order
    if (b > a) return -1; // keep order
})

movements.sort( (a,b) => b - a); // works like above beacause it doesn;t check numbers value but if its positive


// 7. Creating and filling arrays 

Empty array + fill:

let arr = new Array(7); // creates array with 7 empty elements
arr.map(() => 5); // doesnt work
arr.fill(5); //  this one works
arr.fill(5,2,4) // fills 5 for indexes 2 - 4

Array.from:
                        source array    callback function
                            ||          ||
const arr2 = Array.from({length: 7}, () => 1);
console.log(arr2); // [1, 1, 1, 1, ,1 ,1 ,1]

const arr3 = Array.from({length:7}, (_, i) => i + 1);
console.log(arr3); // [1,2,3,4,5,6,7]




-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.join('-'));
console.log(arr);

const checkDogs = function (dogsJulia, dogsKate){
    
    dogsJuliaNew = [...dogsJulia];
    dogsJuliaNew.splice(0,1);
    dogsJuliaNew.splice(-2);

    console.log(`Julia dogs : ${dogsJuliaNew}`);
    console.log(`Kate dogs : ${dogsKate}`);

    const dogsAll = [...dogsJuliaNew,...dogsKate];

    console.log(dogsAll);


    dogsAll.forEach( function (age, i) {
        const adult = `Dog number ${i + 1} is an adult, and is ${age} years old`;
        const puppy = `Dog number ${i+1} is still a puppy`;
        const display = age > 3 ? adult : puppy;
        console.log(display);
    })
}

const array1 = [3,5,2,12,7];
const array2 = [4,1,15,8,3];

checkDogs(array1,array2);

let result;
for (const item of array1){
    if (item === 12)
    result = item;
}
console.log(result);

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

//console.log(dogs);
// 1.

// recommendedFood = weight ** 0.75 * 28;

dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

console.log(dogs);

// 2.

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(sarahDog,sarahDog.recommendedFood > sarahDog.curFood ? 'Eating too much' : 'Eating too little');


// 3. ownersEatTooMuch

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);//;
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);//;
console.log(ownersEatTooLittle);

// 5.

console.log(dogs.some(dog => dog.recommendedFood == dog.curFood));

// 6.

console.log(dogs.some(dog => dog.recommendedFood * 1.1 >= dog.curFood  && dog.recommendedFood * 0.9 <= dog.curFood));

// 7.

const okEaters = dogs.filter(dog => dog.recommendedFood * 1.1 >= dog.curFood  && dog.recommendedFood * 0.9 <= dog.curFood);

console.log(okEaters);

// 8.

const dogsCopy = dogs.slice().sort((curr, next) => curr.recommendedFood -next.recommendedFood );
console.log(dogsCopy);
