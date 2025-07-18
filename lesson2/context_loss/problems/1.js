let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

let getTurkDesription = turk.getDescription.bind(turk);

logReturnVal(turk.getDescription, turk); // undefined undefined is a undefined

// Christopher Turk is a surgeon