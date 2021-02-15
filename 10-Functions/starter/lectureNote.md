# Section 10: A Closer Look at Functions

## 129. First Class and Higher-Order Fucntions

- javaScript treats function as first-class citizens
- this means that functions are siply values
- Functions are just another "type" of object

callback function

## 131. Functions Returning Functions

## 132. The call and apply Methods

## 133. The bind Method

## 135. Immediately Invoked Function Expressions(IIFE)

## 136. Closures

JS에서 가장 이해하기 어려운 부분이라고 알려짐.  
자동적으로 만들어진다.

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
```

closure는 function이 생겼을 당시 환경을 기억하고 접근하게 한다.

- A function ahs access to the variable environment(VE) of the excution context in which it was created
- **Closure:** VE attached to the fucntion, exactly as it was at the time and
  place the fucntion was created

정의

> - A closure is the closed-over **variable environment** of the execution context **in which a function was created**, even **after** that execution context is gone;
> - A closure gives a function access to all the variables **of its parent function**, even **after** that parent function has returned. The function keeps a **reference** to its outer scope, which **preserves** the scope chain throughout time
