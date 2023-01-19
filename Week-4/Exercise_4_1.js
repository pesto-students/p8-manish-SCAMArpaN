function customPromise(executor) {
  let onResolve;
  let onReject;
  this.then = function (fn) {
    onResolve = fn;
    return this;
  };
  this.catch = function (fn) {
    onReject = fn;
    return this;
  };
  function resolve(val) {
    onResolve(val);
  }
  function reject(val) {
    onReject(val);
  }
  executor(resolve, reject);
}

const getNumber = () =>
  new customPromise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        return rej(`Rejected with num: ${randomNumber}`);
      }
      res(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
  });

const numberPromise = getNumber();

numberPromise
  .then((number) => {
    console.log(number);
  })
  .catch((error) => {
    console.log(error);
  });
