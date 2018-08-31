// 배열 요소 찾기
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

function addProductToCart(product) {
  let cartItem = cart.find(item => item.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push(Object.assign(product, { quantity: 1 }));
  }
}

let product1 = {
  id: "a1",
  name: "toothbrush",
  price: 2000
};

let product2 = {
  id: "d1",
  name: "rinse",
  price: 6000
};

addProductToCart(product1); // [{name: "toothbrush, quantity: 3}, {…}, {…}]
addProductToCart(product2); // [{…}, {…}, {…}, {id: "d1", ... , quantity: 1}]
