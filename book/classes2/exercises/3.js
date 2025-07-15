/*
Private Field: balance
private Method: checkBalance
public methods: deposit and withdraw
raise RangeError if not enough funds to withdraw.
*/

class BankAccount {
	#balance = 0;

	#checkBalance() {
		return this.#balance;
	}

	deposit(amount) {
		this.#balance += amount;
		console.log(this.#checkBalance());
	}

	withdraw(amount) {
		if (amount > this.#balance) {
			throw new RangeError('Insufficient funds');
		} else {
			this.#balance -= amount;
		console.log(this.#checkBalance());
		}
	}
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds