let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context); // { foo: Function: foo }

// the implicit context when calling a method is the calling object.
// This is different from a function where its implicit context outside of strict mode
// is the global object / window.

