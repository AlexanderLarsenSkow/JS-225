function foo() {
  return this;
}

let context = foo();
console.log(context); // Object global

// Implicit context is global / window for a function. No explicit context is provided.