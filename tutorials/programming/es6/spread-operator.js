/*
  Spread Operator  

  1 Spread operator in Array
  2 Spread operator in Object
*/


/* 
  Spread operator in array

  make items of array to copy easily.
  ...Array to copy
*/


// add new item
var beers = ['Guinness', 'Heineken'];
var newBeer = "Budwiser"

var updatedBeers = [...beers, newBeer];

console.log(updatedBeers) 
// > Guinness, Heineken, Budwiser


// concatenate arrays
var europeanBeers = ['Guinness', 'Heineken'];
var asianBeers = ['Asahi', 'Kloud']

var worldBeers = [...europeanBeers, ...asianBeers];

console.log(worldBeers);
// > Guinness, Heineken, Asahi, Kloud


/* 
  Spread operator in Object

  make properties of object to copy easily.
  ...object to copy  
*/

var irishBeer = { 
  name: 'Guinness', 
  origin: 'Ireland', 
  available: false 
};

// add or update 
var updatedIrishBeer = { ...irishBeer, available: true };

console.log(updatedIrishBeer);


/* 
  create an asian cars list with spread syntax
*/

var koreanCars = ["Hyundai", "Kia"];
var japaneseCars = ["Toyota", "Honda"];

var asianCars = [...koreanCars, ...japaneseCars];
// > [Hyundai, Kia, Toyota, Honda]


/*
  Q. Update cat's home to Samsan-dong with spread operator
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
// > ..., home: Samsan-dong
