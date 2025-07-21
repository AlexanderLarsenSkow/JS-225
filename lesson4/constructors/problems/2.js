function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard(); // undefined
lizzy.scamper(); // undefined, TypeError