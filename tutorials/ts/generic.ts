/*
  Generics

  type variable
  used in class, function declarations.
*/


function f<Type>(arg: Type): void {
  console.log(arg)
}

f<string>("foo")