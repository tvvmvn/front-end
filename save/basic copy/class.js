/* 
  *** Class ***
  Templates for JavaScript Objects.

  1 class and instance
  2 static property and method
  3 predefined class
  4 literal notation
*/

// 1 class and instance

// class Cat {
//   // instance properties
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // class property
//   home = null;
//   // class method
//   sound() {
//     return 'meow'
//   }
// }

// // # instance of Cat
// const cat = new Cat('Kitty', 2);
// console.log(cat)
// console.log(cat instanceof Cat);
// // # inheritance (reusability)
// console.log(cat.sound())

// 3 static property and method
// provide utilities about class
// class Cat {
//   // static property
//   static personality = 'violent'
//   // static method
//   static isAdult(age) {
//     if (age<1) {
//       return 'Kitten'
//     } else {
//       return 'Adult'
//     }
//   }
// }

// // class calls static property and static method
// console.log(Cat.personality)
// console.log(Cat.isAdult(2))

// # static properties
// let pi = Math.PI;
// console.log(pi)

/*
  3 Predefined class 
  > Text processing: String
  > Number and Date: Number, Math, Date
  > Indexed collections: Array
  > Error: SyntaxError, ReferenceError, TypeError and others
  > Others: Promise, JSON
*/

// 4. literal notation

// # instance of String
// let foo = new String('Foo')
// console.log(foo)

// # literal notation
// let foo = 'Foo'
// console.log(foo)
// console.log(foo.toUpperCase());

/*
  Q. class
  
  Beer class
  
  > instance properties
  name, origin
  > class properties
  history: B.C 3000
  > class method
  recipe: 'grains, hops, yeast and water'
  > static property
  caution: too much drinking may cause much money.
*/

// class Beer {
//   constructor(name, origin) {
//     this.name = name;
//     this.origin = origin
//   }

//   history = 'B.C 3000';

//   recipe() {
//     return 'grains, hops, yeast and water'
//   }

//   static caution = 'too much drinking may cause much money.'
// }

// // // # instance of Beer
// const irishBeer = new Beer('Guinness', 'Ireland')
// const dutchBeer = new Beer('Heineken', 'Netherlands')

// console.log(irishBeer)
// console.log(Beer.caution)