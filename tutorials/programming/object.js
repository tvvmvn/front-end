/* 
  * Object
  composition for data and function

  1 Access property
  2 Add property
  3 Update propery
  4 Delete property
*/


/* 
Access properties
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


/* 
Add properties
*/

cat.age = 2;
console.log(cat);
// > age: 2


/* 
Update properties
*/
 
cat.home = 'Samsan-dong';
console.log(cat);


/* 
Delete properties
*/

delete cat.home;

console.log(cat);


/*
  Q1. Object
  Irish beer is restocked
*/

var irishBeer = { 
  name: 'Guinness', 
  origin: 'Ireland',
  available: false
}

irishBeer.available = true;

console.log(irishBeer)
// ... available: true


/*
  Q2. Object
  print each beer name with uppercase using for loop.
*/

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