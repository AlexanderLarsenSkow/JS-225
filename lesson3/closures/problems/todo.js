/*
We'll build a simple todo list program using the techniques we've seen in this assignment.
Write a makeList function that returns a new function that implements a todo list. 
The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.
When called with an argument that is already on the list, it removes the element from the list.
When called without arguments, it logs all items on the list. If the list is empty, 
	it logs an appropriate message.

Rules:
	- not on list? Add argument to list.
	- already on list, removes element from list.
	- no arguments? logs all items on list.
*/

function makeList() {
	let todos = [];

	return function(todo) {
		if (todo === undefined && todos.length === 0) {
			console.log('The list is empty.');
		}
		else if (todo === undefined && todos.length > 0) {
			todos.forEach(todo => console.log(todo));
		}
		else if (todos.includes(todo)) {
			let index = todos.indexOf(todo);
			todos.splice(index, 1);

			console.log(`${todo} removed!`);
		} else {
			todos.push(todo);
			console.log(`${todo} added!`);
		}
	}
}


let list = makeList();
list();

list('make breakfast');
list('read book');

list();

list('make breakfast');

list();

/*
> let list = makeList();
> list();
The list is empty.
> list('make breakfast');
make breakfast added!
> list('read book');
read book added!
> list();
make breakfast
read book
> list('make breakfast');
make breakfast removed!
> list();
read book
*/