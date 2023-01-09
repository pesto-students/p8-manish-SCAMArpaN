const getNumber = () =>
  new Promise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with num: ${randomNumber}`);
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
