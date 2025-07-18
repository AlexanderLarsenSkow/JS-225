function whatIsMyContext() {
  return this;
}

// Without calling the function, we won't know the execution context.

whatIsMyContext(); // global object

let foo = {};
foo.test = whatIsMyContext;

console.log(foo.test()); // {foo object}