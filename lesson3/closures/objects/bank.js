function makeAccount(number) {
		let balance = 0;
		let transactions = [];

	return {
		balance() {
			return balance;
		},

		transactions() {
			return transactions;
		},

		number() {
			return number;
		},

		deposit(amount) {
			balance += amount;
			transactions.push({type: 'deposit', amount,});
			return amount;
		},

		withdraw(amount) {
			if (amount > balance) {
				amount = balance;
			}

			transactions.push({type: 'withdrawal', amount})
			balance -= amount;
			return amount;
		},	
	};
}

function makeBank() {
	let accounts = [];

	return {
		openAccount() {
			let number = accounts.length + 101;
			let account = makeAccount(number);

			accounts.push(account);
			return account;
		},

		transfer(source, destination, amount) {
			return destination.deposit(source.withdraw(amount));
		},
	};
}

let bank = makeBank();
console.log(bank.accounts);
// undefined