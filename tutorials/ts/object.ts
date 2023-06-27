/* 
  Object
*/

var cat: { name: string, age: number, home: null, sound: Function } = 
{
  name: "Kitty",
  age: 1,
  home: null,
  sound: function () {
    return "Meow"
  }
}

console.log(cat)