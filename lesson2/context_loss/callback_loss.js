let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this)); // use bind to fix the problem here.
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

// Use thisArg argument!

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }, this); // use bind to fix the problem here.
//   },
// };

// obj.foo();

// Arrow functions are another good choice for this problem, as they keep the context their surroundings
// execute in.
