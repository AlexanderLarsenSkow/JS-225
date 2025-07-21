function createPayment(services = {}) {
	let phone;
	let internet;
	let amount = services.amount;
	
	if (!amount) {
		phone = services.phone || 0;
		internet = services.internet || 0;
	}

	return {
		phone,
		internet,
		amount,

		total() {
			return services.amount || phone + internet;
		},
	};
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000