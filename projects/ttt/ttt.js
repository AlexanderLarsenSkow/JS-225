const READER = require('readline-sync');

function count(array, func) {
	return array.filter(func).length;
}

class Sleeper {
	static sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
	}
}

class Player {
	constructor(board) {
		this.board = board;
		this.score = 0;
	}

	gainPoint() {
		this.score += 1;
	}
}

class Human extends Player {
	constructor(board) {
		super(board);
		this.name = this.#getName();
	}

	move() {
		let availableSquares = this.board.availableSquares();

		let choice = this.#getChoice(availableSquares);
		
		let square = this.board.getSquare(choice);
		square.mark(Square.X);
	}

	#getChoice(availableSquares) {
		let choice;

		while(true) {
			choice = READER.question('Please pick a square: ' + 
			`(${availableSquares.join(', ')})`
			);

			if (availableSquares.includes(choice)) {
				break;
			}
			else if (/[1-9]/.test(choice)) {
				console.log('That square is already filled!');
			} else {
				console.log('Please enter an available square (1-9).');
			}
		}

		return choice;
	}

	#getName() {
		console.log('Welcome to Tic Tac Toe!');
		let name = READER.question('What is your name, player?');
		console.log(`It\'s great to meet you, ${name}!`);
		return name;
	}
}

class Computer extends Player {
	move() {
		const availableSquares = this.board.availableSquares();
		let choice;

		if (this.board.fiveAvailable(availableSquares)) {
			choice = this.#pick5();
		} else {
			choice = this.#pickRandom(availableSquares);
		}
	
		let square = this.board.getSquare(choice);
		square.mark(Square.O);
		console.log(`The computer has chosen ${choice}!`);
	}

	#pickRandom(availableSquares) {
		let max = availableSquares.length;
		let randomIndex = Math.floor(Math.random() * max);
		return availableSquares[randomIndex];
	}

	#pick5() {
		return '5';
	}
}

class Board {
	static WINNING_LINES = [
		[1, 2, 3], [4, 5, 6], [7, 8, 9],
		[1, 4, 7], [2, 5, 8], [3, 6, 9],
		[1, 5, 9], [3, 5, 7]
	];

	initializeBoard() {
		let board = {};

		for (let count = 1; count <= 9; count += 1) {
			board[count] = new Square();
		}

		this.squares = board;
	}


	addPlayers(human, computer) {
		this.human = human;
		this.computer = computer;
	}

	display() {
		console.clear();
		console.log('');
		console.log('       |       |');
		console.log(`   ${this.#squareVal('1')}   |   ${this.#squareVal('2')}   |   ${this.#squareVal('3')}`);
		console.log('       |       |');
		console.log('-------+-------+------');
		console.log('       |       |');
		console.log(`   ${this.#squareVal('4')}   |   ${this.#squareVal('5')}   |   ${this.#squareVal('6')}`);
		console.log('       |       |');
		console.log('-------+-------+------');
		console.log('       |       |');
		console.log(`   ${this.#squareVal('7')}   |   ${this.#squareVal('8')}   |   ${this.#squareVal('9')}`);
		console.log('       |       |');
		console.log('');
		console.log(`Your Score: ${this.human.score} : AI Score: ${this.computer.score}`);
		console.log('');
	}

	getSquare(number) {
		return this.squares[number];
	}

	fiveAvailable(availableSquares) {
		return availableSquares.includes('5');
	}

	findComputeSquare() {
		const lines = Board.WINNING_LINES;

		for (let i = 0; i < Board.WINNING_LINES; i += 1) {
			let line = lines[i];
			
		}

	}

	#getCount(filled, line) {
		line = line.map(String);

		return count(filled, key => {
			return line.includes(key);
		});
	}

	#twoInARow(filled) {
		return Board.WINNING_LINES.some(line => {
			return this.#getCount(filled, line) === 2;
		});
	}

	#threeInARow(filled) {
		return Board.WINNING_LINES.some(line => {
			return this.#getCount(filled, line) === 3;
		});
	}

	twoX() {
		let filled = this.xSquares();
		return this.#twoInARow(filled);
	}

	twoO() {
		let filled = this.oSquares();
		return this.#twoInARow(filled);
	}

	threeX() {
		let filled = this.xSquares();
		return this.#threeInARow(filled)
	}

	threeO() {
		let filled = this.oSquares();
		return this.#threeInARow(filled);
	}

	threeInRow() {
		return this.threeX() || this.threeO();
	}

	isX(key) {
		return this.getSquare(key).hasX();
	}

	isO(key) {
		return this.getSquare(key).hasO();
	}

	xSquares() {
		let squareKeys = this.#squareKeys();
		return squareKeys.filter(key => this.isX(key));
	}

	oSquares() {
		let squareKeys = this.#squareKeys();
		return squareKeys.filter(key => this.isO(key));
	}

	filledSquares() {
		let keys = this.#squareKeys();

		return keys.filter(key=> {
			let square = this.getSquare(key);
			return square.hasX() || square.hasO();	
		})
	}

	noMoreSquares() {
		let squareVals = this.#squareVals();
		return squareVals.every(square => square.filledIn());
	}

	availableSquares() {
		let keys = Object.keys(this.squares);
		return keys.filter(key => this.squares[key].isOpen());
	}

	#squareKeys() {
		return Object.keys(this.squares);
	}

	#squareVals() {
		return Object.values(this.squares);
	}

	#squareVal(key) {
		return this.squares[key].value;
	}
}

class Square {
	static X = 'X';
	static O = 'O';
	static EMPTY = ' ';

	constructor() {
		this.value = Square.EMPTY;
	}

	mark(newValue) {
		this.value = newValue;
	}

	isOpen() {
		return this.value === Square.EMPTY;
	}

	hasX() {
		return this.value === Square.X;
	}

	hasO() {
		return this.value === Square.O;
	}

	filledIn() {
		return this.hasX() || this.hasO();
	}
}

class Game {
	static MAX_SCORE = 3;

	constructor() {
		this.board = new Board();
		this.human = new Human(this.board);
		this.computer = new Computer(this.board);

		this.board.addPlayers(this.human, this.computer);
	}

	isWinner() {
		return this.board.threeInRow();
	}

	isTie() {
		return this.board.noMoreSquares() && !this.board.threeInRow();
	}

	determineWinner() {
		console.clear();

		if (this.isTie()) {
			console.log('Uh Oh! There was a tie.')
			return;
		}

		let winner = this.board.threeX() ? this.human : this.computer;
		this.reward(winner);
	}

	reward(winner) {
		winner.gainPoint();
		this.board.display();

		if (winner instanceof Human) {
			console.log('Congratulations! You won this round!');
		} else {
			console.log('Oh no! The computer won this round!');
		}
	}

	currentPlayer(turn) {
		return turn % 2 === 1 ? this.human : this.computer;
	}

	isActiveGame() {
		return this.human.score !== Game.MAX_SCORE &&
		this.computer.score !== Game.MAX_SCORE;
	}

	async playGame() {
		while(this.isActiveGame()) {
			this.board.initializeBoard();
			let turn = 1;

			while(turn <= 9) {
				let player = this.currentPlayer(turn);
				this.board.display();
				player.move();

				turn += 1;
				if (this.isWinner() || this.isTie()) break;	
			}

			this.determineWinner();
			await Sleeper.sleep(2500);
		}
	}

	async #introduceGame() {
		await Sleeper.sleep(3000);
		console.clear();
		let answer;

		console.log('It\'s time to play. Win by getting 3 in a row on the board.');
		console.log(`You play with X. The computer plays with O.`);

		while (!answer || answer === 'N') {
			await Sleeper.sleep(2000);
			answer = READER.question('Are you ready? (Y/N)').toUpperCase();

			if (answer === 'Y') {
				console.clear();
				console.log('Ok! Let\'s play!');
				return;
			}
		}
	}
}

let newGame = new Game();
newGame.playGame();