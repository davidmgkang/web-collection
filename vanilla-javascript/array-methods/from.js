// 배열의 길이를 지정하고 싶을 때.
let array = Array.from(Array(10), (d, i) => i);
let array2d = Array.from(Array(4), () => Array(2));

console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2d); // [Array(2), Array(2), Array(2), Array(2)]
