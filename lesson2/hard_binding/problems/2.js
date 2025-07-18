let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

// This doesn't log anything to the console. It only creates a new function that is bound
// to the context created by obj. However, this is unsaved. the function is also not called.