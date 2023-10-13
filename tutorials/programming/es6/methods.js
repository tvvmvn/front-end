/*
  ES6 Methods

  1 Array.map
  2 Array.filter
  3 Object.keys
*/


/* 
  Array.map

  perform specific operation to Array.
  return updated Array.
*/


// get new array with each item multiplied by 10.

var arr = [10, 20, 30];

var updatedArr = arr.map(function (item, index, self) {
  return item * 10;
})

console.log(updatedArr);
// > 100, 200, 300


/* 
  Array.filter (ES 5)
*/

var ages = [13, 20, 34, 40];

var adults = ages.filter(function (age) {
  if (age >= 18) {
    return age;
  }
})

var adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(ages);
// > 20, 34, 40


/*
  Object.keys

  return keys as string array of Object
*/

var cat = {
  name: "Kitty",
  home: null,
  sound: function () {
    return "Meow";
  }
}

var keys = Object.keys(cat);

console.log(keys) 
// > name, home, sound


/*
  Q. get new array with all items in uppercase
  using beers array.
*/


var beers = ["guinness", "heineken", "budwiser"];

var updatedBeers = beers.map(function (beer) {
  return beer.toUpperCase();
})

console.log(updatedBeers);
// > GUINNESS, HEINEKEN, BUDWISER