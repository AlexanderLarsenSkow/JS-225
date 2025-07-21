let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // 2

foo.bar(); // 2
Foo(); // creating global properties // 2

obj = {};
Foo.call(obj); // 2
obj.bar(); // 2

console.log(this.a); // 2