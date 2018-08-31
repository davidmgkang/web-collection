// http://mygumi.tistory.com/330
// hasOwnProperty() => 자기만의 프로퍼티 소유를 확인, 프로토타입 체인은 확인하지 않는다.
const me = {
  firstName: "Lee",
  lastName: "JungHyun",
  toString() {
    return this.firstName + this.lastName;
  }
};

let text = "The author name is ";
// Bad - 프로토타입 체인을 통해 Object.toString 접근
if (me.toString) {
  text += me;
}
// Good - 직접 정의한 프로퍼티가 있는지 확인
if (me.hasOwnProperty("toString")) {
  text += me;
}