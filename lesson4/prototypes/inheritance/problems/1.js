let foo = {};

let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); // 1

// it logs 1 because foo is the prototype of bar.

// If the currento bject doesn't have the property, the prototype is checked, all the way up the
// chain. Here, it finds the property a in foo, which is why this code doesn't log undefined.