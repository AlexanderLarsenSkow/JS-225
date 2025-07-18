function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
		// let self = this; // use self again!

    repeatThreeTimes(function() {
      // console.log('hello, ' + this.firstName + ' ' + this.lastName); // lost context
      // console.log('hello, ' + self.firstName + ' ' + self.lastName); // lost context
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// Really rough with callback functions haha