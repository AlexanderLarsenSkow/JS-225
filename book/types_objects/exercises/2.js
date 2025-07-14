function Book(title, author, year) {
	return {
		title,
		author,
		year,
	};
}

let necromancer = new Book('Necromancer', 'William Gibson', 1984);
let doomsdayBook = new Book('Doomsday Book', 'Connie Willis', 1992);

console.log(necromancer);
console.log(doomsdayBook);

// The two objects are Book types.
// The constructor is the Book constructor function, which is called by the new keyword.
// The instance objects are necromancer and doomsdayBook

/*
Alternative Style:

function Book(title, author, published) {
  this.title = title;
  this.author = author;
  this.published = published;
}
*/