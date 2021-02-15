# Lecture Note

## 자바스크립트 특징

1. High level
2. garbage collected
3. interpreted or just in time compile
4. Multi paradigm
5. Prototype based object-oriented
6. first class function
7. dynamic
8. single threaded
9. non-blocking event loop

call stack
scope chain

---

## execution context

- Variable environment
- scope chain
- this keyword

---

## 92. Scope and The Scope Chain

**Scoping:** How our program's variables are **organized** and **accessed**.  
"Where do variables live?" or "Where can we access a certain variable, and where not?";

The 3 Types of Scope

- global scope
- function scope
- block scope(ES6)

let, const

only lookup

## 94. Variable Environment: Hoisting and The TDZ

let & const in TDZ
TDZ : Temporal Dead Zone

## 97. The this keyword

Method : Object that is calling the method  
Simple function call: Undefined or window  
Arrow Function : this of surrounding function(lexical this)
Event Listener : DOM element that the handler is attached to

## 98. Regular Fuctions vs. Arrow Functions

Object 중괄호는 block이 아니다. Literal이다.  
내부가 Global Scope이다.

Method로써 arrow function을 쓰지 마라. 실수 방지.
