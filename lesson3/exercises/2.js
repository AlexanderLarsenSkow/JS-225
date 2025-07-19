const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

/*
This method won't return the desired results because this is referenced inside the callback
function passed into map. Object context is loss in callback functions, so this binds to the global
object / window. The all movies meothd right now returns 

undefined 1 undefined 2 undefined 3

Now it will work:
*/
console.log(franchise.allMovies());