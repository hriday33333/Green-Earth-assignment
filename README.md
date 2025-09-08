


#### 1) What is the difference between var, let, and const?
*** Ans: 
 var-----
Scope: Function-scoped. If declared inside a function, it is local to that function; if declared outside, it’s global.
Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
Re-declaration: Can be re-declared and updated within the same scope.
Use Case: Older code, but not recommended for modern development due to scoping issues.

let----
Scope: Block-scoped (curly braces {}), which is safer.
Hoisting: Hoisted but not initialized, so using it before declaration causes a ReferenceError.
Re-declaration: Cannot be re-declared in the same scope but can be updated.
Use Case: Preferred for variables that will change over time.

const---
Scope: Block-scoped, like let.
Hoisting: Hoisted but not initialized (like let).
Re-declaration: Cannot be re-declared or updated.
Use Case: For constants or values that shouldn’t change, like configuration settings or fixed values.

#### 2) What is the difference between map(), forEach(), and filter()? 

Ans---
2. map()

Purpose: Creates a new array by transforming each element of the original array.
Return value: A new array of the same length.
Use case: When you want to transform data without modifying the original array.

1. forEach()

Purpose: Executes a function on each element of an array.
Return value: undefined (does not create a new array).
Use case: When you want to perform side effects, like logging or modifying something outside the array.

3. filter()

Purpose: Creates a new array containing only elements that pass a test (predicate).
Return value: A new array, possibly shorter than the original.
Use case: When you want to select elements based on a condition.

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

