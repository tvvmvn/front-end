/*
  Destructing
  
  1 Array Destructing 
  2 Object Destructing
  3 Parameter Destructing
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

// Destructing 
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

// Destructing 
var { name, origin, available } = irishBeer;


/* 
  Parameter Destructing 
  assign properties of object to parameter with simpler syntax
*/

var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false };

// invoke
f(irishBeer)

// Traditional
function f(beer) {
  var name = beer.name;
  var origin = beer.origin;
  var available = beer.available;
}

// Destructing
function f({ name, origin, available }) {}


/*
  Q1 assign each beer to variables with destructing syntax.
*/

var asianBeers = ['Kloud', 'Asahi'];

var [koreanBeer, japaneseBeer] = asianBeers;
