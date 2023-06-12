/*
  Destructing
  
  1 Array Destructing 
  assign item of array to variables with simpler syntax
  
  2 Object Destructing
  assign properties of object to variables with simpler syntax
*/


/* Array */
var beers = ['Guinness', 'Heineken', 'Budwiser'];

// Traditional methods
var irishBeer = beers[0]
var dutchBeer = beers[1]
var americanBeer = beers[3]


// Destructing Syntax
var [ irishBeer, dutchBeer, americanBeer ] = beers;



/* Object */
var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false }

// Traditional
var name = irishBeer.name;
var origin = irishBeer.origin;
var available = irishBeer.available;


// Destructing syntax
var { name, origin, available } = irishBeer;


/* Parameter Destructing */

var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false };

function f(irishBeer) {
  var name = irishBeer.name;
  var origin = irishBeer.origin;
  var available = irishBeer.available;
  // ..
}

f(irishBeer);


function f({ name, origin, available }) {
  // ..
}

f(irishBeer);


// Q1. assign each beer to variables with destructing syntax.
var asianBeers = ['Kloud', 'Asahi'];

var [koreanBeer, japaneseBeer] = asianBeers;
