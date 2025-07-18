let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage(); // 'JavaScript makes sense!'

/*
	Even though we create a new proerty logMessage that references the bar function,
	because bar references a function whose context is permanently associated with positiveMentality,
	it always has that context, even when it is a property in a separate object.
*/