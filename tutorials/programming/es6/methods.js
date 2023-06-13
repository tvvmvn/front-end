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

let beers = ["Guinness", "Heineken", "Budwiser"];

let updatedBeers = beers.map(function (beer) {
  return beer.toUpperCase();
})

console.log(updatedBeers) 
// > GUINNESS, HEINEKEN, BUDWISER


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

const keys = Object.keys(cat);

console.log(keys) 
// > name, home, sound