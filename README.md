


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
Ans---
1. Basic Syntax
function add(a, b) {
    return a + b;
}
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
If the function has a single expression, you can omit {} and return — it returns the expression automatically.
If there is more than one statement, use {} and return explicitly:
2. Arrow Function with One Parameter
If there is only one parameter, parentheses () can be omitted:
If there are no parameters, you must use empty parentheses:
3. this Behavior
Arrow functions do not have their own this. They inherit this from the surrounding scope (lexical this), unlike normal functions where this depends on how the function is called.
4. Key Points
Arrow functions are anonymous by default (no function name unless assigned to a variable).
Shorter and cleaner syntax.
Cannot be used as constructors (i.e., cannot use new).

Do not have arguments object. Use rest parameters (...args) instead.
#### 4) How does destructuring assignment work in ES6?
Ans----

Destructuring Assignment (ES6) – Summary:
Purpose: Extract values from arrays or objects into separate variables.
Array Destructuring: Uses positions; order matters.
Object Destructuring: Uses property names; order doesn’t matter.
Default Values: Can assign defaults if the value is undefined.
Variable Renaming: Object properties can be assigned to new variable names.
Nested Destructuring: Works with nested arrays or objects.
Function Parameters: Can destructure arrays or objects directly in function arguments.
Key Points:
Makes code cleaner and more readable.
Avoids repetitive access to array indices or object properties.
Works with both simple and nested structures.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals are strings enclosed in backticks ` instead of single ' or double " quotes. They allow:
String interpolation (embed variables directly)
Multi-line strings
Expression evaluation inside the string
String Interpolation
Embed variables or expressions directly using ${...}.
No need for + for concatenation.
Multi-line Strings
Strings can span multiple lines naturally without \n.
Expression Evaluation
You can embed any JavaScript expression inside ${...}.