foo = 1;
var moreFoo = 10;
let evenMoreFoo = 40;

function bar() {
	return 1;
}

console.log(global.foo);           // 1
console.log(global.moreFoo);       // 3
console.log(global.evenMoreFoo);   // undefined
console.log(global.bar);           // function bar() { return 1; }

// Can't delete properties that are declared with var or function declarations