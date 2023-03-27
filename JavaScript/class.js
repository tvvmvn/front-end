/* 

  *** Class ***
  Templates for JavaScript Objects.

  1 class instance
  2 static property and method
  3 predefined class
  4 literal notation

*/



/* 
  class instance 
*/

class Cat {
  // to create instance properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // class member (property)
  home = null;
  
  // class member (method)
  sound() {
    return 'meow'
  }
}


// instance of Cat
const cat = new Cat('Kitty', 2);

console.log(cat)
// > Cat cat

console.log(cat instanceof Cat);
// > true


// inheritance (reusability)
console.log(cat.home)
// > null

console.log(cat.sound())
// > meow


/*
  2 Static property and method

  provide utilities about class and instance
*/


class Cat {
  // static property
  static family = 'Felidae'
  
  // static method
  static isAdult(age) {
    if (age < 1) {
      return 'Kitten'
    } else {
      return 'Adult'
    }
  }
}


// class itself calls static property and static method
console.log(Cat.personality)
// > Cat
console.log(Cat.isAdult(2))
// > Adult


// static properties of predefined class
let pi = Math.PI;

console.log(pi)
// > 3.14


/*
  3 Predefined class in JS
  
  Text processing: String
  Number and Date: Number, Math, Date
  Indexed collections: Array
  Error: SyntaxError, ReferenceError and others
  Others: Promise, JSON
*/



/*
  4. literal notation
*/


// instance of String
var foo = new String('bar'); // constructor
var foo = 'bar'; // literal notation


// instance of Number
var year = new Number(2023); // constructor
var year = 2023; // literal notation


// instance of Object
var o = new Object({ prop1: 'foo', prop2: 'bar'}) // constructor
var o = { prop1: 'foo', prop2: 'bar' }; // literal notation


/*
  Q. class
  
  Beer class
  
  > instance properties
  name, origin

  > class member (properties)
  history: B.C 3000

  > class member (method)
  recipe: 'grains, hops, yeast and water'

  > static property
  caution: too much drinking may cause much money.
*/


class Beer {
  constructor(name, origin) {
    this.name = name;
    this.origin = origin;
  }

  history = 'B.C 3000';

  recipe() {
    return 'grains, hops, yeast and water.';
  }

  static caution = 'too much drinking may cause much money.';
}


// instance of Beer
const irishBeer = new Beer('Guinness', 'Ireland');
const dutchBeer = new Beer('Heineken', 'Netherlands');


// instances of Beer
console.log(irishBeer);
console.log(dutchBeer);


// static property
console.log(Beer.caution);
