function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // ?

// No, status is a private variable that is not accessible outside the startup function
// and the anonymous function it returns.