# Section 9 : Data Structures, Mordern Operators and String

여기서는 **Modern javaScript** 문법에 대해 주로 다룬다.😁

## Destructuring Array

작은 단위로 배열을 쪼갠다.
<br><br>

### **104. Destructuring Object**

<br>

```javascript
let a = 111, b=999;
{ a, b } = obj; // 코드블럭으로 인식
({ a, b }=obj); // 괄호로 감싸준다.
```

---

### **105. The Spread Operator (...)**

Spread Operator가 Destucturing Arr와 다른점:

- 모든 요소에 대해 다룬다
- 새로운 변수를 만들지 않는다.
- 콤마로 구분된 변수가 들어가는 영역에 사용한다.

Iterable 한 객체에 사용할 수 있다. Object는 안된다.  
새로운 배열을 만들거나, 함수에 argument를 전달할 때 사용된다.

---

### **106. Rest Pattern and Parameters**

Spread와 Rest는 형태는 동일하나 하는 역할은 반대이다.

### **107. short circuiting (&& and ||)**

|| 같은 경우 첫번째 값이 truthy value면 즉시 첫번째 값을 반환. 전부 falsy하다면 마지막 값을 반환  
&& 는 첫번째 값이 falsy value면 즉시 첫번째 값을 반환한다.

### **111. ES6 Enhanced object literal**

- property 이름이 외부의 object 이름과 동일할 경우 생략 가능
- function 지정할 때 ": function" 생략 가능

```javascript
const objectEx1 = {
  add: function (a, b) {
    return a + b;
  },
};

const objectEx2 = {
  add(a, b) {
    return a + b;
  },
};
```

- Computed property name

### 112. Optional Chaining

- ?. 있는지 없는지 알려줌
- Nullish : Null or undefined

## 118. Summary: Which Data Structure to use?

Data Source에 의한 분류

1. Program 자신
2. UI
3. Web API

4개의 Built-In Data Structure

- Array or Set
- Object or Map

Built-in이 아닌 것도 있다.

Array vs Sets
Object vs Maps

## 120. Work With String

자바스크립트는 스트링 메소드를 호출하면  
자동적으로 같은 내용의 스트링 Object로 변환한다.  
이를 'Boxing'이라고 한다. 박스로 감싸듯이..
operating이 끝나면 object를 primitive로 리턴한다.
