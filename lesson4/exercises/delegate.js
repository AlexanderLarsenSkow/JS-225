/*
	Input: object, name of method on object
	output: return same value returned by calling other obj's method

	Rules:
		- delegate the behavior of method on object to another object's method
		- remaining arguments passed to other argument's method.
		-

	Examples:
*/

function delegate(obj, methodName, ...args) {
	return function() {
		return obj[methodName].apply(obj, args);
	}
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'