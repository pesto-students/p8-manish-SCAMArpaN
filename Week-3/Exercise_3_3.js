function createlncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createlncrement(); // create an intance and get function from the intance

increment(); // increment count
increment(); // increment count
increment(); // increment count

log(); // print 'Count is 0' Because it is initialized when the instance is created.
