class myClass {
	myPublic() {
		return this.#myPrivate();
	}

	#myPrivate() {
		return 'This is a private method.';
	}
}

const instance = new myClass();
console.log(instance.myPublic()); // 'This is a private method';
// console.log(instance.#myPrivate());
// SyntaxError: Private field '#myPrivate' must be declared in an enclosing class