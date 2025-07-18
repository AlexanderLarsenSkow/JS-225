let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here

outputList.apply(fruitsObj, fruitsObj.list);

// Alternatively: use call with ...

outputList.call(fruitsObj, ...fruitsObj.list);

// Apply is a better choice here, as we can simply pass in the list property array, which 
// corresponds perfectly to what apply expects as the second argument.

// call isn't a great choice here because we would have to iterate to the end of the array
// to get every arugment. Here, we can do the same thing simply by just using apply.

/*
Challenge:
let args = [].slice.call(arguments);

why do this?

I imagine we do this because we're setting the context for the slice call. That is, we want to copy
the arguments context into an empty array so that it has access to the array methods. We use
call to set that context explicitly.

*/