async function doTask1(strAppend = "") {
  return new Promise((Resolve, Reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        Reject(
          console.log(`Rejected with num: ${randomNumber} ...${strAppend}`)
        );
      }
      Resolve(
        console.log(`Resolved with num: ${randomNumber} ...${strAppend}`)
      );
    }, randomNumber * 10);
  }).catch((e) => {
    console.log(e);
  });
}
async function doTask2(strAppend = "") {
  return new Promise((Resolve, Reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        Reject(
          conosle.log(`Rejected with num: ${randomNumber} ...${strAppend}`)
        );
      }
      Resolve(
        console.log(`Resolved with num: ${randomNumber} ...${strAppend}`)
      );
    }, randomNumber * 10);
  }).catch((e) => {
    console.log(e);
  });
}
async function doTask3(strAppend = "") {
  return new Promise((Resolve, Reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        Reject(
          console.log(`Rejected with num: ${randomNumber} ...${strAppend}`)
        );
      }
      Resolve(
        console.log(`Resolved with num: ${randomNumber} ...${strAppend}`)
      );
    }, randomNumber * 10);
  }).catch((e) => {
    console.log(e);
  });
}

async function doTheTasks() {
  await doTask1();
  await doTask2();
  await doTask3();
}
doTheTasks();

function* doTheTasksGen() {
  yield doTask1("Using Gen function");
  yield doTask2("Using Gen function");
  yield doTask3("Using Gen function");
}

const itr = doTheTasksGen();

itr.next();
