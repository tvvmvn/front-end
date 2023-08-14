/* 
  * Object
  composition for data and function
*/

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


/*
  Q1. Object
*/

var irishBeer = { 
  name: 'Guinness', 
  origin: 'Ireland',
  available: false
}

// Irish beer is restocked
irishBeer.available = true;

console.log(irishBeer)
// ... available: true


/*
  Q2. Object
*/

// 2 print each beer name with uppercase using for loop.
var beers = [
  { name: 'Guinness', origin: 'Ireland' },
  { name: 'Heineken', origin: 'Netherlands' },
  { name: 'Budwiser', origin: 'USA' },
]

for (let i=0; i<beers.length; i++) {
  console.log(beers[i].name.toUpperCase());
}

// > GUINNESS
// > HEINEKEN
// > BUDWISER