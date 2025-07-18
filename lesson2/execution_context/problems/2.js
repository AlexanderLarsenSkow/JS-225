'use strict';

function foo() {
  return this;
}

let context = foo();
console.log(context); // undefined

// In strict mode, the implicit context for a function is undefined. It is not global anymore.