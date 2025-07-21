// Freeze the object so it can't be changed or mutated at all.

let frozen = {
	integer: 4,
	string: 'String',
	array: [1, 2, 3],
	object: { foo: 'bar' },

	func() {
		console.log('I\'m frozen!');
	},
};

Object.freeze(frozen);

frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen

/*
The array and object are changed because we mutated the value at that property. We didn't
change or reassign the property itself. So this is similar to a shallow copy type of situation:
the freeze doesn't save object values from being mutated.
*/