"use strict";

function foo() {
  console.log('this here is: ' + this);
}

// implicit execution context in strict mode is undefined

console.log(foo());                // "this here is: undefined"
console.log('this here is: ' + this); // "this here is: [object Window]"