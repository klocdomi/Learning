document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Converting and checking numbers


console.log(Number.parseInt('30px', 10));       ===>      console.log(Number.parseInt('30px', 10)); // 30, base 10
console.log(Number.parseInt('0101', 10)); // 101, base 10
console.log(Number.parseInt('dsd', 10)); // NaN
console.log(Number.parseInt('0101', 2)); // 5, base 2
console.log(Number.parseFloat('    2.5rem    ')); // 2.5
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(20 / 0)); // true , 20/0 = Infinity not NaN
console.log(Number.isFinite(20)); // "best method for number checking"

// 2. Math and rounding

square root:
Math.sqrt(25) ==> 25 ** (1/2)

console.log(Math.max(25,1,2,3)); // 25
console.log(Math.max(25,1,'2er', 123); // NaN
console.log(Math.min(4,12,5,66,77)); // 4

Math.PI ~~ 3.1415

Math.trunc() - removes decimal parts
Math.random() - random number 0-1
Math.abs() - absolute value

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

Rounding ints:

Math.trunc();
Math.round(); - rounds to the nearest integer
Math.ceil(); - rounds up 
Math.floor(): - rounds down

For negatives ceil & floor work other way around

Rounding decimals:
(2.8).toFixed(0); // 3
(2.8).toFixed(3); // 2.700
(2.348).toFixed(2); // 2.35
(+(2.348).toFixed(2)); // 2.35 but typeof Number not string like all above

// 3. BigInt

Introduced in ES2020. Not possible to mix BigInt with regular Number (but works in coearsion)
BigInt() consturctor is used to convert Number to BigInt

console.log(2 ** 53 - 1); // biggest number that can be presented by JS
console.log(Number.MAX_SAFE_INTEGER);

console.log(84723847238342342342349n); // 84723847238342342342349n
console.log(BigInt(84723847238342342342349)); // 84723847238342336839680n  !!! not the same Number is bigger than MAX SAFE INTEGER

console.log(11n/3n); // 3n
console.log(10/3); // 3.33333333335

// 4. Creating Dates

const now = new Date();
console.log(now); //Fri Apr 16 2021 13:40:32 GMT+0200 (Central European Summer Time)

console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time)
 
console.log(new Date(2005, 04, 2, 21, 37, 0)); Mon May 02 2005 21:37:00 GMT+0200 (Central European Summer Time)

begining of the unix time: 01.01.1970
console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)
console.log(newnew Date(3 * 24 * 60 * 60 * 1000)); // 3 days later from 01.01.1970

const begining    =  new Date(0)
                                .getFullYear(); 1970
                                .getMonth(); 0 / starts with 0?
                                .getDate(); 01
                                .getDay();  04 - thursday
                                .getHours(); 00
                                .getMinutes(); 00
                                .getSeconds(); 00
                                .toISOString(); // 1970-01-04T00:00:00.000Z - Z = UTC
                                .getTime(); // timestamp - int value from constructor (miliseconds)

new Date(0).getTime() == Date.now()

begining.setFullYear(2002);

const diff = Date.now() - new Date(0);
console.log(diff); 

-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

console.log(Number.parseInt('dsd', 10));
console.log(Number.parseFloat('2.5rem'));

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = ((min, max) => Math.trunc(Math.random() * (max - min) + 1) + min);
console.log(randomInt(100,200));

console.log(84723847238342342342349n); // 84723847238342342342349n
console.log(BigInt(84723847238342342342349)); // 84723847238342336839680n

const now = new Date();
console.log(now);
console.log(new Date('December 24, 2015'));
console.log(new Date(2005, 04, 2, 21, 37));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000).toISOString());

const diff = Date.now() - new Date(0);
console.log(diff);

console.log(new Date(diff)/ (1000 * 60 * 60 * 24 * 365)); // 51 years