// 열거가능한 프로퍼티 반복, 프로토타입 체인까지 접근.
let product = {
  id: "a2bs31",
  title: "soju",
  price: 12000,
  quantity: 10
};

Object.prototype.test = 1;

for (let key in product) {
  console.log(product[key]);
}