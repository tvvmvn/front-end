/*
  Class
*/

class Cat {
  name: string;
  age: number;
  home: null = null;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  sound(): string {
    return "Meow"
  }
}

var cat = new Cat("Kitty", 2);

console.log(cat)