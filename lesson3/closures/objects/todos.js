// function makeList() {
// 	let todos = [];

// 	return function(todo) {
// 		if (todo === undefined && todos.length === 0) {
// 			console.log('The list is empty.');
// 		}
// 		else if (todo === undefined && todos.length > 0) {
// 			todos.forEach(todo => console.log(todo));
// 		}
// 		else if (todos.includes(todo)) {
// 			let index = todos.indexOf(todo);
// 			todos.splice(index, 1);

// 			console.log(`${todo} removed!`);
// 		} else {
// 			todos.push(todo);
// 			console.log(`${todo} added!`);
// 		}
// 	}
// }

function makeList() {
	let todos = [];

	return {
		isEmpty() {
			return todos.length === 0;
		},

		list() {
			if (this.isEmpty()) {
				console.log('The list is empty.')
			} else {
				todos.forEach(todo => console.log(todo));
			}
		},

		add(newTodo) {
			todos.push(newTodo);
			console.log(`${newTodo} added!`);
		},

		remove(todo) {
			let index = todos.indexOf(todo);
			if (index === -1) {
				console.log(`${todo} aren't in the list!`);
				return;
			}

			todos.splice(index, 1);
			console.log(`${todo} removed!`)
		}
	};
}

let list = makeList();
list.add('peas');
list.list();

list.add('corn');
list.list();

list.remove('peas');
list.remove('apples');

list.list();