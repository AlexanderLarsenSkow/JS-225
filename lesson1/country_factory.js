function makeCountry(name, continent, visited = false) {
	return {
		name,
		continent,
		visited,

		getDescription() {
			let auxilliary = this.visited ? 'have' : 'haven\'t';
    	return this.name + ' is located in ' + this.continent + '. ' +
				`I ${auxilliary} visited ${this.name}` + '.' ;
		},

		visitCountry() {
			this.visited = true;
		},
	};
}

let chile = makeCountry('The Republic of Chile', 'South America');
console.log(chile.getDescription());

let canada = makeCountry('Canada', 'North America');
canada.visited = true;

console.log(canada.getDescription());

let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(southAfrica.getDescription());
// console.log(southAfrica);


// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };