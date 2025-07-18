"use strict"

a = 10;

console.log(window.a === a);

/*
This code in the browser results in a ReferenceError, since strict mode is enabled and
the variable a is not declared.
*/