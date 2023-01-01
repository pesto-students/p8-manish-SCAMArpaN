// Added Const items to the function so that its not accessable out side the function
function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    log() {
      console.log(items);
    },
  };
}

const stack = createStack();
stack.push(10); // items array pushed 10 as element
stack.push(5); // items array pushed 5 as element
stack.log(); // Added a log function to print elements in items array
stack.pop(); // items array is poped means 5 will be removed

console.log(stack.items); // will no longer print the values as items array is no longer returned
stack.items = [10, 100, 1000]; // will create a new array that is seperate
