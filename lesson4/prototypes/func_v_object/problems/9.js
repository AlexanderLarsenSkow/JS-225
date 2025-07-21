// let consoleProto = Object.getPrototypeOf(console);

// console.log = function(value) {
// 	return value.constructor;
// }

// console.log("Hello");
// console.log([1,2,3]);
// console.log({name: 'Srdjan'});

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);