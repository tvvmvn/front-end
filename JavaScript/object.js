/* 
  *** Object ***
  composition for data and function

  1 Acess object
*/



/* Access object */

var cat = { 
  // properties
  name: "Kitty",
  home: null,
  sound: function () { // method
    return "meow";
  }
}


console.log(cat);
// > Object cat
console.log(cat.name);
// > Kitty
console.log(cat['name']);
// > null
console.log(cat.color);
// > undefined
console.log(cat.sound());
// > meow


// Add new property
cat.age = 2;
console.log(cat);
// > age: 2


// Update 
cat.home = 'Samsan-dong';
console.log(cat);


// Delete property
delete cat.home;

console.log(cat);
// > Cat without home property.



/*
  Q. Object
*/

// 1 Access and print origin of Heineken.
var beers = [
  { name: 'Guinness', origin: 'Ireland'},
  { name: 'Heineken', origin: 'Netherlands'},
  { name: 'Budwiser', origin: 'USA'},
]

console.log(beers[1].origin)
// > Netherlands


// 2 Name to uppercase
for (let i=0; i<beers.length; i++) {
  console.log(beers[i].name.toUpperCase());
}

// > GUINNESS
// > HEINEKEN
// > BUDWISER