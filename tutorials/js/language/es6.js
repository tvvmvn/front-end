/*
  ES6 (2015)

  Major change
  New Syntax

  let, const
  arrow function 
  destructing √
  spread operator √
  class
  promise
  symbol
  Array.map()
*/


/*
  Array Destructing 
  
  assign item of array to variables with simpler syntax
*/


var beers = ['Guinness', 'Heineken', 'Budwiser'];

// Traditional methods
var irishBeer = beers[0]
var dutchBeer = beers[1]
var americanBeer = beers[3]


// Destructing Syntax
var [ irishBeer, dutchBeer, americanBeer ] = beers;



/*
  Object Destructing

  assign properties of object to variables with simpler syntax
*/


var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false }

// Traditional
var name = irishBeer.name;
var origin = irishBeer.origin;
var available = irishBeer.available;


// Destructing syntax
var { name, origin, available } = irishBeer;


/* 
  Parameter Destructing
*/

var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false };

function f(irishBeer) {
  var name = irishBeer.name;
  var origin = irishBeer.origin;
  var available = irishBeer.available;

  // ...
}

f(irishBeer);


function f({ name, origin, available }) {
  // ...
}

f(irishBeer);


/*
  Spread operator: Array

  make items of array to copy easily.
  ...array to copy
*/


// add new item
var beers = ['Guinness', 'Heineken'];
var newBeer = "Budwiser"

var updatedBeers = [...beers, newBeer];

console.log(updatedBeers)


// concat arrays
var europeanBeers = ['Guinness', 'Heineken'];
var asianBeers = ['Asahi', 'Kloud']

var worldBeers = [...europeanBeers, ...asianBeers];

console.log(worldBeers);



/*
  Spread operator: Object

  make properties of object to copy easily.
  ...object to copy
*/


// update property
var irishBeer = { 
  name: 'Guinness', 
  origin: 'Ireland', 
  available: false 
};

// add or update properties.
var updatedIrishBeer = { ...irishBeer, available: true };

console.log(updatedIrishBeer);


/*
  Q. ES6
*/

// Q1. Destructing 
var asianBeers = ['Kloud', 'Asahi'];

var [koreanBeer, japaneseBeer] = asianBeers;


// Q2. Spread Operator
var cat = {
  name: 'Kitty',
  age: 1,
  home: null,
  sound: function () {
    return 'Meow'
  }
}

var updatedCat = { ...cat, home: 'Samsan-dong' };

console.log(updatedCat);



