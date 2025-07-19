function newStack() {
	let stack = [];

	return {
		printStack() {
			stack.forEach(item => console.log(item));
		},

		push(newValue) {
			stack.push(newValue);
		},

		pop() {
			return stack.pop();
		},
	};
}

let stack1 = newStack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

stack1.printStack();

stack1.pop();
stack1.printStack();