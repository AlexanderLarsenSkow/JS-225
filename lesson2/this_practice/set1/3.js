let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

console.log(obj.method()); // 2,  this points to the current object. 
