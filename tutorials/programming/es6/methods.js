/*
  Methods

  1 Array.map()
  2 Object.keys()
*/


/* 
  Array.map() 

  perform specific operation to Array.
  return updated Array.
*/

let arr = [1, 2, 3];

let updatedArr = arr.map(function (item) {
  return item * 10;
})

console.log(updatedArr);
// > 10, 20, 30


/*
  Object.keys()

  return key array of Object
*/

let cat = {
  name: "Kitty",
  home: null,
  sound: function () {
    return "Meow";
  }
}

let keys = Object.keys(cat);

console.log(keys) 
// > name, home, sound


/*
  Quiz

  Array.map()
*/

let beers = ["Guinness", "Heineken", "Budwiser"];

let updatedBeers = beers.map(function (beer) {
  return beer.toUpperCase();
})

console.log(updatedBeers) 
// > GUINNESS, HEINEKEN, BUDWISER