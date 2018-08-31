# Javascript 코딩 컨벤션

ES6 기준

## 들여쓰기

intentSize => 2

## 문장의 종료

세미콜론(;) 반드시 사용

## 명명규칙 camelCase

<ul>
  <li>대문자 약어는 대문자 그대로 사용한다.</li>
  <li>상수는 대문자와 '_'를 사용한다.</li>
  <li>
    변수, 함수는 소문자 카멜표기법을 사용한다.
    <ul>
      <li>배열은 복수형 이름을 사용</li>
      <li>이벤트 핸들러는 'on'으로 시작</li>
      <li>반환 값이 불린인 함수는 'is'로 시작</li>
      <li>
        타입이 불린이면 다음 케이스로 작성한다.
        <ul>
          <li>is + 명사</li>
          <li>is + 현재진행형(ing)</li>
          <li>is + 형용사(과거분사)</li>
          <li>조동사 + 동사원형</li>
        </ul>
      </li>
      <li>private은 '_'로 시작</li>
    </ul>
  </li>
  <li>클래스는 대문자 카멜표기법을 사용한다.</li>
</ul>

[상수]

```
LIST_MAX
```

[변수]

```
item;
shoppingCart;
```

[Boolean 변수]

```
isHidden, isCompleted, isAvailable // is + 형용사(과거분사) ~할 수 있는가?, ~되어졌는가?(수동태)
isDescendant, // is + 명사 ~ 인가?
isExecuting, // is + ing ~ 하는 중인가?
canMoveNextPage; // 조동사 + 동사원형
shouldRefresh // 조동사 + 동사원형
```

```
// 배열
items;
```

[함수]

```
// 함수
moveTo

// 이벤트 핸들러
onClickEvent

// 불린 반환 함수
isMovePage
```

[private]

```
_privateVariableName
```

[대문자 약어]

```
parseHTML
parseXML
imageURL
```

## 선언과 할당

### 변수

var 는 절대 사용하지 않는다.
모든 경우 const 를 우선적으로 권장한다.
값이 변하지 않는 변수는 const, 값이 변하는 변수는 let 을 사용하여 선언한다.
레퍼런스 타입인 경우 기본적으로 const 를 사용하되, 재할당이 필요할 경우에는 let 을 사용한다.
const 를 let 보다 먼저 그룹화한다.
const 와 let 으로 선언한 변수는 블록 스코프이며, 선언 전에는 hoist 되지 않으므로, 사용 시점에 선언 및 할당을 한다.
선언만 하는 변수의 경우 한 줄로 연결할 수 있으나, 한 줄씩 선언 권장한다.

[선언만 하는 변수]

```
// Good
let foo;
let bar;
let quux;

// Bad - 한 줄 연결
let foo, bar, quux;
```

[사용 시점에 선언 및 할당]

```
// Good
function foo() {
    const len = this._array.length;
    for (let i = 0; i < len; i += 1) {
        ...
    }

    // 사용 시점에 선언 및 할당
    const len2 = this._array2.length;
    for (let j = 0; j < len2; j += 1) {
        const item = this._array2[j];
        ...
    }
}

// Bad - 블록 스코프 밖에서 변수 선언
function foo() {
    const len = this._array.length;
    let i = 0;
    let j = 0;
    let len2, item;

    for (; i < len; i += 1) {
        ...
    }

    len2 = this._array2.length;
    for (j = 0, len2 = this._array2.length; j < len2; j += 1) {
        item = this._array2[j];
        ...
    }
}
```

[const 먼저 그룹화]

```
// Good
const len = this._array.length;
const len2 = this._array2.length;
let i = 0;
let j = 0;
let foo, bar;

// Bad - 그룹화 없음
let foo;
let i = 0;
const len = this._array.length;
let bar;
```

### 배열과 객체

배열과 객체는 반드시 리터럴로 선언한다.

```
// Good
let array = [];
let array = [1, 2, 3, 4, 5];
let obj = {}

// Bad
let array = new Array();
let array = new Array(1, 2, 3, 4, 5);
let obj = new Object();
```

배열 복사 시 순환문을 사용하지 않는다.

```
// Bad
for (let i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// Good(1)
itemsCopy = items.slice();

// Good(2)
const itemsCopy = [...items];
```

[method syntax 사용]

```
// Good
const atom = {
    value: 1,

    addValue(value) {
        return atom.value + value;
    }
};

// Bad
const atom = {
    value: 1,

    addValue: function(value) {
        return atom.value + value;
    }
};
```

## Destructuring ES6

하나의 오브젝트에서 복수의 프로퍼티에 접근할 때는 Destructuring 을 이용한다.

```
// Good
function getFullName(obj) {
    const {firstName, lastName} = obj;

    return `${firstName} ${lastName}`;
}

// Best
function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

// Bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}
```

배열도 Destructuring 이 가능하다.

```
const arr = [1, 2, 3, 4];

// Good
const [first, second] = arr;

// Bad
const first = arr[0];
const second = arr[1];
```

## 템플릿 문자열 ES6

프로그램에서 문자열을 생성하는 경우 template strings 를 이용한다.

```
// Good
function sayHi(name) {
    return `How are you, ${name}?`;
}

// Bad
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

// Bad
function sayHi(name) {
    return ['How are you, ', name, '?'].join();
}
```

## 모듈 ES6

항상 import 와 export 를 이용한다. 이 때 wildcard import 는 사용하지 않는다. 또한 import 문으로부터 직접 export 하지 않는다.

```
// Good
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// Best
import {es6} from './AirbnbStyleGuide';
export default es6;

// Bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// Bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// Bad
export {es6 as default} from './airbnbStyleGuide';
```

## 데이터형 확인하기

암묵적 캐스팅으로 인한 혼동을 막기 위해 완전항등연산자인 ===, !== 만을 사용한다.

[문자열]

```
typeof variable === 'string'
```

[숫자]

```
typeof variable === 'number'
```

[불린]

```
typeof variable === 'boolean'
```

[객체]

```
typeof variable === 'object'
```

[배열]

```
Array.isArray(arrayObject)
```

[널 Null]

```
variable === null
```

[미할당 Undefined]

```
typeof variable === 'undefined'
variable === undefined
```

[엘리먼트 노드]

```
element.nodeType === 1
```

## 반환하기

특정 값을 반환해야 하는 경우, 함수의 맨 마지막에서 한 번만 return 한다. 단, 예외 처리로 빠져나가기 위해 사용하는 return;은 제외한다.

함수 내에서 if 문이 여러 번 호출되면, 함수로 분리해야 한다. 부득이한 경우에만 이 규칙을 적용한다

// Good
function getResult() {
var resultData;
...

    if (condition) {
        ...
        resultData = someDataInTrue;
    } else {
        ...
        resultData = someDataInFalse;
    }

    return resultData;

}

## reference

- <https://github.com/nhnent/fe.javascript/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)>
- <https://soojin.ro/blog/naming-boolean-variables>
