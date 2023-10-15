/* 
  * Class
  Templates for JavaScript Objects.

  1 class instance
  2 Contructor
  3 Inheritance
  4 Static member
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
  function member of class
*/

class Beer {

  // members...

  // function member
  drink() {
    return 'Cool!';
  }
}

var beer = new Beer();

// method of instance
console.log(beer.drink())
// > Cool


/*
  Static property and method

  Provide useful work about class
*/

class Beer {
  
  // ...

  // static property
  static HISTORY = 'B.C 3000'

  // static method
  static brewing() {
    return 'grains, hops, yeast and water'
  }
}

// class itself invokes
console.log(Beer.HISTORY)
console.log(Beer.brewing())


// Static properties of built-in class
var pi = Math.PI;

console.log(pi);
// > 3.14


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


/*
  Literal notation

  writes only value
*/


// Instance of String
var foo = new String('bar'); 
var foo = 'bar'; // literal notation


// Instance of Number
var year = new Number(2023); 
var year = 2023; // literal notation


// Class which is not supporting literal notation 
var date = new Date();
console.log(date)


// Object VS Object
// ..


/*
  Q. Create an class <Car> to be following:

  1 Class member: name, brand, color

  2 it has constructor

  3 function member: sound

  3 static method: getAge
  get car's age if you pass purchased date.
*/

class Car {
  // members
  name;
  brand;
  color;

  constructor(name, brand, color) {
    this.name = name;
    this.brand = brand;
    this.color = color;
  }

  sound() {
    return "GRRRR";
  }

  static getAge(purchasedAt) {
    return "Your car age is " + (2023 - purchasedAt)
  }
}

const car = new Car('GV80', 'Genesis', 'Black');

console.log(car)
console.log(car.sound());
console.log(Car.getAge(2020))