// 누적 관련 유용
let cart = [
  {
    id: "a1",
    name: "toothbrush",
    price: 2000,
    quantity: 2
  },
  {
    id: "b1",
    name: "toothpaste",
    price: 1000,
    quantity: 5
  },
  {
    id: "c1",
    name: "shampoo",
    price: 4000,
    quantity: 3
  }
];

let total = cart.reduce((sum, product) => {
  return sum + product.price * product.quantity;
}, 0);

console.log(total); // 21000
