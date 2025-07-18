"use strict"

function func() {
  b = 1;
}

func(); // ReferenceError, since b is not declared.

console.log(b);