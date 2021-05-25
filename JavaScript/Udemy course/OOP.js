document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. OOP

Paradigm based on concept of objects used to model (describe) real-world or abstract features. 
Class - blueprint to creating new objects.
Instance - specific object created from the class

4 pillars of OOP:
Abstraction, encapsulation, inheritance, polymorphism

// 2. OOP in JS

Every object has Prototype.
Prototypal inheritance - the prototype contains methods that are accesible to all objects linked to that prototype

const num = [1,2,3];
num.map(v => v * 2); // Array.prototype.map()

Implementing prototypal inheritance in JS:
1. Constructor functions - creating objects from a function (arrays, maps, sets)

2. ES6 Classes - modern way (works the same as constructor functions). ES6 classes doesn't behave as classical OOP

3. Object.create() - easiest and the most straightforward method to prototype object

// 3. Constructor functions

capital letter convention 

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // !!! never create method inside constructor function (will create method copy in every object). Check #4
  this.calcAge = function() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
};

const domi = new Person('Domi', 1995);
console.log(domi);
console.log(domi instanceof Person); // true

Process behind scenes:
1. New {} obj is created
2. function is called, this = {}
3. {} linked to the prototype (__proto__ property)
4. function automatically return {}

{...} == new Object(...)

// 4. Prototypes

// it's not copying to every instance but only one exists and all instances can use it
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

domi.__proto__ == Person.prototype; // true
Person.prototype.isPrototypeOf(domi); // true
Person.prototype.isPrototypeOf(Person); // false, its not prototype of PErson but all objects linked to Person (created by Person)

Person.prototype.species = 'Human'; // domi.__proto__ => { ... species = 'Human' }
domi.hasOwnProperty('firstName'); // true
domi.hasOwnProperty('Human'); // false

// 5. Prototypal inheritance and chain


Prototype chain - series of links between objects linked through prototypes (similar to scope chain):

<img src="http://127.0.0.1:5500/Udemy%20course/img/OOP_prototype_chain.JPG" height="80%" width="80%"/>

console.log(Person.prototype.constructor); // function as string?
console.dir(Person.prototype.constructor); // { function } actual object

const arr = [3, 5, 7, 8];
arr.__proto__ == Array.prototype; // true


// 6. ES6 classes

1. Classes are NOT hoisted !
2. Class are first-class citizens (can be passed in and returned by functions)
3. Classes are executed in strict mode


Class expression:

const PersonClass = class {

}

Class declaration:

class PersonClass {

}

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property. This is different from constructor functions
  calcAge() {
    console.log(new Date.now.getFullYear - this.birthYear);
  }
}

const polka = new PersonClass('polka', 1990);
polka.CalcAge();


// 7. Getters & setters

Mainly used for data validation?

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

  get age() {
    return new Date().getFullYear() - this.birthYear;
  },

  // Set a property that already exists, creates new property 
  set fullName(name) {
    this._fullName = name;
  },

  get fullName() {
    return this._fullName
  }
};

console.log(account.latest); // getter
account.latest = 50; // setter
console.log(account.movements);


// 8. Static methods

Example:
Array.from(document.querySelectorAll('h1'));

Person.hey = function () {
  console.log('hey there');
};

Person.hey(); // static method
domi.hey(); // doesn't work, it's not inherited


class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property. This is different from constructor functions
  calcAge() {
    console.log(new Date.now.getFullYear - this.birthYear);
  }

  // Static method
  static hey() {
    console.log('hey there');
    console.log(this); // this = entire class
  }
}

// 9. Object.create


class PersonPrototype {
  calcAge() {
    console.log(new Date.now.getFullYear - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName,
    this.birthYear = birthYear
  }
};

const steven = Object.create(PersonPrototype); // creates objectes from prototype
steven.name = 'Steve';
steven.birthYear = 2000;
steven.calcAge();

const polka = Object.create(PersonPrototype);
polka.init('witaminka',1990);
polka.calcAge();


// 10. Inhertiance between classes

1) Constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // in regular function calls Person(...), 'this' is set to undefined
  this.course = course;
};

// Student.prototype = Person.prototype; // wont work - wouldnt create new student prototype but point to person's one instead 
Student.prototype = Object.create(Person.prototype); // linking prototypes
Student.prototype.introduce = function () {
  console.log('hi, i'm mike');
};

const mike = new Student('mike', 2002, 'electrical engineering');
mike.introduce();
mike.calcAge();

2) ES6 classes

extends keyword for inheritance

class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // constructor function of parent class, always need to be called first !!!
    this.course = course;
  }

  introduce() {
    console.log(hi, i'm mike);
  }
}

const martha = new StudentClass('Martha FFasf', 2012);

3) Object.create()

class PersonPrototype {
  calcAge() {
    console.log(new Date.now.getFullYear - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName,
    this.birthYear = birthYear
  }
};

const steven = Object.create(PersonPrototype);

const StudentPrototype = Object.create(PersonPrototype); // inheritance from person prototype
StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentPrototype); // creates objects from student prototype
jay.init('Jaaaayy', 2002, 'school');

// 11. Encapsulation

1) Protected - there's convention to name properties with _ prefix and create getter, setter..
However it doesn't block the property in anyway.

class Account {
  constructor(pin) {
    this._pin = pin;
  }
}

2) Private

class Account {
  // public fields (instances)
  locale = navigator.language;
  
  // private fields
  #movements = []; // # makes field private, actual field name, have to use # everywhere

  // public methods
  print() {
    console.log('100$');
  }

  // private methods
  #approveLoan(val) { // may not be implemented in JS, new feature
    return true;
  }

  constructor(pin) {
    this._pin = pin;
  }

  static helper() {
    console.log('call 09000 for help');
  }
}



-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const domi = new Person('Domi', 1995);
console.log(domi);
console.log(domi instanceof Person);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

domi.calcAge();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Current car speed: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Current car speed: ${this.speed}`);
};

const car1 = new Car('test', 50);
const car2 = new Car('mercedes', 100);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const polka = new PersonClass('polka', 1990);
polka.calcAge();


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // getter
account.latest = 50; // setter
console.log(account.movements);


class CarES6 {
  constructor(make, speed) {
    this.make = make,
    this.speed = speed
  }

  accelerate() {
    this.speed += 10;
    console.log(`Current car speed: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Current car speed: ${this.speed}`);
  }

  get speedUS() {
    return this.speed * 1.6;
  }

  set speedUS(value) {
    this.speed = value *1.6;
  }
}

const maybach = new CarES6('mercedes', 150);

maybach.accelerate();
maybach.brake();

console.log(maybach.speedUS);
maybach.speedUS = 250;
console.log(maybach.speed, maybach.speedUS);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`tesla goin with ${this.speed} and is charged to ${this.charge}%`);
};

const tesla = new EV('tesla', 150, 90);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(100);
console.log(tesla.charge);


class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // constructor function of parent class, always need to be called first !!!
    this.course = course;
  }

  introduce() {
    console.log('hi, i\'m mike');
  }
}

const martha = new StudentClass('Martha FFasf', 2012);
martha.introduce();
console.log(martha);
