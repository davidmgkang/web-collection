// http://mygumi.tistory.com/322
// 객체, 깊은 복사
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const origin = {
  id: "a",
  info: {
    a: 1,
    b: 2
  }
};

let copy = deepCopy(origin);

copy.info.a = 9;

console.log(origin); // {id: "a", info:{a:1,b:2}}
console.log(copy); // {id: "a", info:{a:9,b:2}}
