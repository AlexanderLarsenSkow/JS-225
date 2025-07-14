function Album(title, artist, release) {
	this.title = title;
	this.artist = artist;
  this.release = release;
}

let thriller = new Album('Thriller', 'Michael Jackson', 1982);
let darkSide = new Album('The Dark Side of the Moon', 'Pink Floyd', 1973);

console.log(thriller);
console.log(darkSide);

/*
Type: Album
Constructor Function: Album, called with new keyword
Instance Objects: thriller, darkSide
*/