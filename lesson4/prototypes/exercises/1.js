function getDefiningObject(object, propKey) {
	let proto = object;

	do {
		if (proto.hasOwnProperty(propKey)) return proto;
		proto = Object.getPrototypeOf(proto);

	} while (proto)

	return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null