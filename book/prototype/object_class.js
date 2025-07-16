let obj = {
	foo: 42,
};

let objProto = Object.getPrototypeOf(obj);
console.log(objProto === Object.prototype);

console.log(Object.getOwnPropertyNames(objProto));

// factories do the same thing: create objects that inherit from Object.prototype