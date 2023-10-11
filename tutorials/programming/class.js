/* 
  * Class
  Templates for JavaScript Objects.

  1 class instance
  2 Contructor
  3 Inheritance
  4 Static property and method
  5 Built-in class
  6 Literal notation
*/


/* 
  instance 

  object that is created from class
*/


class Beer {
  // class member 
  name;
  origin;
  available;
}

var irishBeer = new Beer();
irishBeer.name = 'Guinness'
irishBeer.origin = 'Ireland'
irishBeer.available = false;

var dutchBeer = new Beer();
dutchBeer.name = 'Heineken'
dutchBeer.origin = 'Netherlands'
dutchBeer.available = true;


console.log(irishBeer)
// > Beer {...}
console.log(irishBeer instanceof Beer)
// > true

console.log(dutchBeer)
// > Beer {...}
console.log(dutchBeer instanceof Beer)
// > true


/*
  constructor

  process setting properties of instance 
*/

class Beer {
  name;
  origin;
  available;

  constructor(name, origin, available) {
    this.name = name;
    this.origin = origin;
    this.available = available;
  }
}

var irishBeer = new Beer('Guinness', 'Ireland', false);

console.log(irishBeer)


/* 
  Inheritance

  instance inherites properties and method from class
*/

class Beer {

  // ...

  // function member
  drink() {
    return 'Cool!';
  }
}

var beer = new Beer();

// All instance of Beer can access drink method
console.log(beer.drink())
// > Cool


/*
  Static property and method

  Provide utilities for class
*/

class Beer {
  
  // ...

  // static property
  static history = 'B.C 3000'

  // static method
  static brewing() {
    return 'grains, hops, yeast and water'
  }
}

// class itself invokes
console.log(Beer.history)
console.log(Beer.brewing())


// Complete Beer class
class Beer {
  name;
  origin;
  available;
  
  constructor (name, origin, available) {
    this.name = name;
    this.origin = origin;
    this.available = available;
  }

  drink() {
    return 'Cool';
  }

  static history = 'B.C 3000'

  static brewing() {
    return 'grains, hops, yeast and water'
  }
}


/*
  Built-in class in JavaScript
  
  1 Text processing: String
  2 Number and Date: Number, Math, Date
  3 Indexed collections: Array
  4 Error: SyntaxError, ReferenceError and other error.
  5 Others: Promise, JSON, Object
*/

// Static properties of predefined class
var pi = Math.PI;

console.log(pi);
// > 3.14


/*
  Literal notation
*/

// Instance of String
var foo = new String('bar'); // Class
var foo = 'bar'; // literal notation

// Instance of Number
var year = new Number(2023); // Class
var year = 2023; // literal notation

// Class which is not supporting literal notation 
var date = new Date();
console.log(date)


/*
  Q. Create an class names Car to be following:

  1 Class member
  name, brand, color

  2 constructor for all members

  3 static method - getAge
  return car's age if you pass purchased date.
*/

class Car {
  constructor(name, brand, color) {
    this.name = name;
    this.brand = brand;
    this.color = color;
  }

  // member
  name;
  brand;
  color;

  static getAge(purchasedAt) {
    return "Your car age is " + (2023 - purchasedAt)
  }
}

const car = new Car('GV80', 'Genesis', 'Black');

console.log(car)
console.log(Car.getAge(2020))