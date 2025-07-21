function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard(); // now will work
lizzy.scamper(); // I'm scampering!