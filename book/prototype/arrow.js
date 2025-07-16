// Arrow Functions: Don't have function prototypes...
// They do have object prototypes...

let foo = () => console.log('foo');
let fooProto = Object.getPrototypeOf(foo);

console.log(foo.prototype); // undefined, no Function prototype
console.log(fooProto); // {}
console.log(fooProto === Function.prototype); // true