// 전개 연산자, 복사 및 확장
let data = {
  idx: 0,
  a: 1,
  b: 2,
  c: 3
};
let { idx, ...sub } = data;
let copy = { ...data };
let extend = { ...data, d: 4 };

console.log(idx); // 0
console.log(sub); // {a:1,b:2,c:3}
console.log(copy); // {idx:0,a:1,b:2,c:3}
console.log(extend); // {idx:0,a:1,b:2,c:3,b:4}
