
/*
  *** DATA TYPE *** 
  
  1 String
  2 Number 
  3 Boolean
  4 Null
  5 Undefined
  6 BigInt 
  7 Symbol
*/

/* 
  1 String (문자열)
  a sequence of characters. inside single or double quotes '', ""
*/

// console.log('foo') 
// console.log("foo") 
// console.log(typeof 'foo')
// console.log('foo bar')
// console.log("")
// console.log("2022")

// # access each single characters
// var foo = 'bar';
// console.log(foo[0])
// console.log(foo[1])
// console.log(foo[2])
// console.log(foo.length);

/*
  2 Number
  it represent number between -(2^1024) and +(2^1024)
  its value can be integer, decimals, NaN(Not a number), +Infinity, -Inifinity
  
  ref
  double precision floating point number
*/

// console.log(2022)
// console.log(typeof 2022)
// console.log(3.14)
// console.log(0)
// console.log(-2)
// console.log(2-'foo');
// console.log(-Number.MAX_VALUE);
// console.log(Number.MAX_VALUE);

/*
  3 Boolean
  represent true or false
*/

// console.log(true) 
// console.log(false)
// console.log(typeof true)
// console.log(1>0)

/*
  4 Null
  to represent 'empty', invalid' 
*/

// console.log(null); 
// console.log(typeof null);
// var foo = null;
// console.log(foo);
// var homeForstreectCats = null;

/*
  5 Undefined
  when variables is not defined
*/ 

// console.log(undefined)
// var x;
// console.log(x); 
// console.log(typeof x); 

/*
  6 BigInt
  represent integer outside safe integer  -(2^53-1) ~ +(2^53-1)
  약 -9,000조 ~ 9,000조
*/

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER) 
// console.log(9999999999999999) // Number type
// console.log(9999999999999999n) // BigInt
// console.log(typeof 9999999999999999n) 

/*
  7 Symbol (ES6)
  represent unique hidden identifier
*/

// const x = {id: 'foo'}

// let id = Symbol("id");
// x[id] = 'bar';

// console.log(x)
// console.log(x.id)


/*
  Q. Data type

  1 Range of type Number
            [?]                   [?]
  -Infinity <---------- 0 ----------> +Infinity

  2 Range of Safe integer 
              [?]                   [?]
  Big integer <---------- 0 ----------> Big integer

  3 Data type representing invalid, empty

  4 Data type representing not defined
*/