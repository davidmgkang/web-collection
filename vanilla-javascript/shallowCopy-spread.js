// http://mygumi.tistory.com/322
// 배열, 얕은 복사
let originArray = [
  {
    id: "M1",
    title: "product",
    thumbURL: "static/img/6.jpeg",
    originURL: "static/img/6.jpeg",
    keyword: ["a", "b", "c"]
  },
  {
    id: "M2",
    title: "custom",
    thumbURL: "static/img/2.jpeg",
    originURL: "static/img/2.jpeg",
    keyword: ["z", "r", "y"]
  },
  {
    id: "M3",
    title: "C",
    thumbURL: "static/img/3.jpeg",
    originURL: "static/img/3.jpeg",
    keyword: ["d", "b", "e"]
  }
];

let copyArray = originArray.map(item => ({ ...item }));

copyArray[0].keyword.push("new!!");

console.log(originArray[0]); // keyword ["a", "b", "c", "new!!"]
console.log(copyArray[0]); // keyword ["a", "b", "c", "new!!"]
