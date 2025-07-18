let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo(); // 2

// The implicit execution context has changed from the global object / window to obj