// The call and apply methods can both be used to explicitly set an execution context.

// 7.
// Use call to invoke bar.add with foo as the context.


let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

console.log(bar.add()); // abcdef
console.log(bar.add.call(foo)); // 3

