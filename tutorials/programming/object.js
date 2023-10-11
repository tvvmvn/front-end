/* 
  * Object
  composition for data and function

  1 Access property
  2 change object
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
// > {..}
console.log(cat.name);
// > Kitty
console.log(cat["name"]);
// > null
console.log(cat.color);
// > undefined
console.log(cat.sound());
// > meow


/* 
change object
*/

var cat = { 
  // properties 
  name: "Kitty",
  home: null,
  sound: function () { // method
    return "meow";
  }
}

// add property
cat.age = 2;
console.log(cat);
// > age: 2

// update property
cat.home = "Samsan-dong";
console.log(cat)
// > home: "Samsan-dong"

// delete property
delete cat.home;
console.log(cat)
// no home 

/*
  Q1. Irish beer is restocked
*/

var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland",
  available: false
}

irishBeer.available = true;

console.log(irishBeer)
// available: true


/*
  Q2. print each beer name with uppercase using array loop.
*/

var beers = [
  { name: "Guinness", origin: "Ireland" },
  { name: "Heineken", origin: "Netherlands" },
  { name: "Budwiser", origin: "USA" },
]

for (let i=0; i<beers.length; i++) {
  console.log(beers[i].name.toUpperCase());
}
// > GUINNESS
// > HEINEKEN
// > BUDWISER