let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar(); // { a: 1, bar: [Function: bar], baz: [Function: baz] }
let qux = foo.bar;
qux(); // TypeError: this.baz is not a function