let bankAccount = {
	accountNumber: '1234567890',
	balance: 10_000.56,
	accountType: 'checking',
	name: 'Jane Doe',
	address: '2246 NW 12th Ave, Portland, Oregon',
	phone: '456-334-1221',

	withdraw(amount) {
		if (this.balance > 0) {
			this.balance -= amount;
			return amount;
		} else {
			return 0;
		}
	},

	deposit(amount) {
		this.balance += amount;
		return `New Balance: ${this.balance}`;
	},
};

console.log(bankAccount.balance);

console.log(bankAccount.withdraw(500));
console.log(bankAccount.balance);

console.log(bankAccount.deposit(5243.10));
console.log(bankAccount.balance);
