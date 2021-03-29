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




-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.join('-'));
console.log(arr);