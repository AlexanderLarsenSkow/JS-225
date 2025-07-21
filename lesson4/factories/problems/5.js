/*
Steps for calculating payment:

	A payment reduces the phone / internet bills.


*/

const PHONE_DEFAULT = 3000;
const INTERNET_DEFAULT = 5500;

function createInvoice(services = {}) {
	let phone = services.phone || PHONE_DEFAULT;
	let internet = services.internet || INTERNET_DEFAULT;

	let payments = [];

	function totalPayments() {
		return payments.reduce((total, payment) => total + payment, 0);
	}

	return {
		phone,
		internet,

		total() {
			return this.phone + this.internet;
		},

		addPayment({total}) {
			let payment = total();
			payments.push(payment);
		},

		addPayments(payments) {
			payments.forEach(payment => {
				this.addPayment(payment);
			})
		},

		amountDue() {
			return this.total() - totalPayments();
		}
	};
}

function createPayment(services = {}) {
	let amount = services.amount;
	let phone = services.phone || 0;
	let internet = services.internet || 0;

	return {
		phone,
		internet,
		amount,

		total() {
			return services.amount || phone + internet;
		},
	};
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0