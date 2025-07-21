const PHONE_DEFAULT = 3000;
const INTERNET_DEFAULT = 5500;

function createInvoice(services = {}) {
	let phone = services.phone || PHONE_DEFAULT;
	let internet = services.internet || INTERNET_DEFAULT;

	return {
		phone,
		internet,

		total() {
			return this.phone + this.internet;
		},
	};
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000