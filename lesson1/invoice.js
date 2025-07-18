let invoices = {
	unpaid: [],
	paid: [],

	add(name, amount) {
		let client = {
			name,
			amount,
		};

		this.unpaid.push(client);
	},

	totalDue() {
		return this.total(this.unpaid);
	},

	totalPaid() {
		return this.total(this.paid);
	},

	total(invoices) {
		return invoices.reduce((total, client) => {
			return total += client.amount;
		}, 0);
	},

	payInvoice(name) {
		let invoiceIdx = this.unpaid.findIndex(customer => name === customer.name);

		if (invoiceIdx !== -1) {
			this.paid.push(this.unpaid[invoiceIdx]);
			this.unpaid.splice(invoiceIdx, 1);
		}
	}
};

invoices.add('Harry', 100);
invoices.add('Jake', 350);
invoices.add('Solomon', 500);

console.log(invoices.totalDue()); // 950

invoices.payInvoice('Harry');
invoices.payInvoice('Jake');

console.log(invoices.unpaid);
console.log(invoices.paid);

console.log(invoices.totalPaid()); // 450