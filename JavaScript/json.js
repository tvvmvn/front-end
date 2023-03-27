/* 
  *** JSON (JavaScript Object Notation) *** 
  text format to store and transfer JavaScript object

  1 Object and JSON
  2 JSON.stringify()
  3 JSON.parse()
*/


/*
  Object and JSON
*/


var o = { foo: 'bar' };
// JSON format of 'o' object
var json = '{ "foo": "bar" }';


console.log(o)
// > { foo: 'bar' }
console.log(typeof o);
// > object

console.log(json)
// { "foo": "bar" }
console.log(typeof json)
// > string


/* 
  2 JSON.stringify()
  
  Object to JSON
*/


var o = { foo: 'bar' };
var json = JSON.stringify(o)

console.log(json)
// > { "foo": "bar" }


/*
  3 JSON.parse
  
  JSON to Object
*/


var json = '{"foo": "bar"}'
var o = JSON.parse(json);

console.log(o)
// > { foo: 'bar' }
