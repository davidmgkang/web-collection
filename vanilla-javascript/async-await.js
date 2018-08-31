// http://mygumi.tistory.com/328
// async-await
function delay(item) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(item);
      resolve();
    }, 500)
  );
}

async function basic() {
  await delay(1);
  console.log("Done!");
  return "basic";
}

async function loop1(array) {
  // array.map(async item => {
  //   await delay(item);
  // });
  array.forEach(async item => {
    await delay(item);
  });
  console.log("Done!");
}

async function loop2(array) {
  for (const item of array) {
    await delay(item);
  }
  console.log("Done!");
}

async function series1() {
  await delay(0);
  await delay(1);
  await delay(2);
  await delay(3);
  await delay(4);
  await delay(5);
  await delay(6);
  await delay(7);
  await delay(8);
  await delay(9);
  console.log("Done!");
}

async function series2(array) {
  for (const item of array) {
    await delay(item);
  }
  console.log("Done!");
}

async function parallel1() {
  const a0 = delay(0);
  const a1 = delay(1);
  const a2 = delay(2);
  const a3 = delay(3);
  const a4 = delay(4);
  const a5 = delay(5);
  const a6 = delay(6);
  const a7 = delay(7);
  const a8 = delay(8);
  const a9 = delay(9);

  await a0;
  await a1;
  await a2;
  await a3;
  await a4;
  await a5;
  await a6;
  await a7;
  await a8;
  await a9;
  console.log("Done!");
}

async function parallel2(array) {
  const promises = array.map(item => delay(item));
  await Promise.all(promises);
  console.log("Done!");
}

basic();

loop1([1, 2, 3]);
loop2([1, 2, 3]);

series1();
series2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

parallel1();
parallel2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 풀어논 형태, 각각의 비동기 처리의 반환값이 존재할 경우 용이
async function loop(array) {
  for (let item of array) {
    await new Promise(async resolve => {
      let a = await request1(item);
      let b = await request2(item);
      let c = await request3(item);
      resolve({ a, b, c });
    });
  }
  completed();
}
