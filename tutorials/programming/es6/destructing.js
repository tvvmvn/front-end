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
  access properties with simpler syntax
*/

var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false }

// Traditional
console.log(irishBeer.name, irishBeer.origin, irishBeer.available);

// Destructing 
var { name, origin, available } = irishBeer;

console.log(name, origin, available)


/* 
  Parameter Destructing 
  access parameter with simpler syntax
*/

var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false };

// Traditional
function f(beer) {
  console.log(beer.name, beer.origin, beer.available);
}

// Destructing
function f({ name, origin, available }) {
  console.log(name, origin, available);
}

f(irishBeer)

/*
  Q1. assign each beer to variables with destructing syntax.
*/


var asianBeers = ['Kloud', 'Asahi'];
var [koreanBeer, japaneseBeer] = asianBeers;

console.log(koreanBeer);
console.log(japaneseBeer);
// > Kloud 
// > Asahi


/* 
  Q2. access properties with destructing
*/


var car = { name: "Avante", color: "White" };
var { name, color } = car;

console.log(name, color);
// Avante White
