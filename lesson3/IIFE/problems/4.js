(function foo() {
  console.log('Bar');
})();

foo() // ? No. This is just a function name for internal use with the callstack.

// This isn't an identifer we can use to refernece it later. We will throw a ReferenceError