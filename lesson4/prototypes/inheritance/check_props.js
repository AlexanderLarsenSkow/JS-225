// Object.hasOwnProperty and Object.getOwnPropertyNames

let foo = {
	a: 1,
};

let bar = Object.create(foo);

bar.a = 1;
bar. b = 2;

console.log(bar.hasOwnProperty('a')); // true
console.log(Object.getOwnPropertyNames(bar)); // ['a', 'b']

delete bar.a;

console.log(bar.hasOwnProperty('a')); // false
console.log(Object.getOwnPropertyNames(bar)); // ['b']

console.log(bar.hasOwnProperty('c')); // false

/*
3 Useful methods from Object.prototype:

toString => returns string representation
isPrototypeOf => returns true or false if obj is prototype of other object (on chain)
hasOwnProperty => returns true or false if current object has the property
*/