/*
  Spread Operator  

  1 Spread Operator with Array
  2 Spread Operator with Object
*/


/* 
  Array 

  make items of array to copy easily.
  ...Array to copy
*/

// add new item
var beers = ['Guinness', 'Heineken'];
var newBeer = "Budwiser"

var updatedBeers = [...beers, newBeer];

console.log(updatedBeers) 
// > Guinness, Heineken, Budwiser


// concat arrays
var europeanBeers = ['Guinness', 'Heineken'];
var asianBeers = ['Asahi', 'Kloud']

var worldBeers = [...europeanBeers, ...asianBeers];

console.log(worldBeers);
// > Guinness, Heineken, Asahi, Kloud


/* 
  Object 

  make properties of object to copy easily.
  ...object to copy  
*/

var irishBeer = { 
  name: 'Guinness', 
  origin: 'Ireland', 
  available: false 
};

// add or update properties.
var updatedIrishBeer = { ...irishBeer, available: true };

console.log(updatedIrishBeer);


/*
  Q. Update cat's home from null to Samsan-dong with spread operator
*/

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
