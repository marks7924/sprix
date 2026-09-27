/* ==========================================================================
   JAVASCRIPT LEARNING NOTES & OFFICIAL REFERENCE GUIDE
   CHAPTER 3: JAVASCRIPT PROGRAMMING FOUNDATIONS
   ========================================================================== */

/* --------------------------------------------------------------------------
   LESSON 3.1: VARIABLE DECLARATION AND ASSIGNMENTS (LET)
   -------------------------------------------------------------------------- */

// Declare variable with let:
let x;

// Assign value 2 to variable y:
let y = 2;

// Reassign variable y:
y = 5;
console.log(y);


/* --------------------------------------------------------------------------
   LESSON 3.2: DATA TYPES, TYPEOF & STRICT EQUALITY
   -------------------------------------------------------------------------- */

console.log(typeof 100);    // "number"
console.log(typeof "Word"); // "string"

console.log(1 == "1");  // true (loose comparison - ignores type)
console.log(1 === "1"); // false (strict comparison - verifies value AND type)

console.log(Number("10")); // convert string to number
console.log(String(500));  // convert number to string


/* --------------------------------------------------------------------------
   LESSON 3.3: COMPARISON & LOGICAL OPERATORS
   -------------------------------------------------------------------------- */

// && (Logical AND) - requires all conditions true
// || (Logical OR) - requires at least one condition true
// == (Loose Equal)
// === (Strict Equal)
// >= (Greater than or Equal)
// <= (Less than or Equal)


/* --------------------------------------------------------------------------
   LESSON 3.4: CONDITIONAL BRANCHING & NESTED LOGIC
   -------------------------------------------------------------------------- */

if (y > 1) {
    console.log("y is greater than 1");
} else if (y < 1) {
    console.log("y is less than 1");
} else {
    console.log("y is equal to 1");
}

// Nested Conditionals:
let weather = "sunny";
let shop = "CLOSED";

if (weather === "sunny") {
    if (shop === "OPEN") {
        console.log("Purchase picnic items");
    } else {
        console.log("Shop closed; picnic with local fruit");
    }
} else {
    console.log("Lunch at home");
}


/* --------------------------------------------------------------------------
   LESSON 3.5: FUNCTIONS, PARAMETERS, ARGUMENTS & RETURNS
   -------------------------------------------------------------------------- */

// num1, num2 are parameters (placeholders)
function sum(num1, num2) { 
    let result = num1 + num2;
    return result; // return outputs value to caller
}

// 1, 2 are arguments (actual values passed)
console.log(sum(1, 2));


/* --------------------------------------------------------------------------
   LESSON 3.6: LOOPS & ITERATION CONTROL (FOR, FOR...OF)
   -------------------------------------------------------------------------- */

// Counter For Loop:
for (let i = 0; i < 5; i++) {
    console.log("Iteration index:", i);
}

// Array Value Iteration (for...of):
let degreeList = [8, 6, 11, 10];
for (let degree of degreeList) {
    console.log(degree);
}


/* --------------------------------------------------------------------------
   LESSON 3.7: ARRAYS & DATA COLLECTIONS (PUSH, POP, LENGTH)
   -------------------------------------------------------------------------- */

let tempList = [36, 36, 26, 27];
console.log(tempList[0]);      // Index lookup (0-indexed)
console.log(tempList.length);  // Length property

tempList.push(40); // Appends item to array end
let lastVal = tempList.pop(); // Removes and returns last item


/* --------------------------------------------------------------------------
   LESSON 3.8: BUILT-IN MATH UTILITIES
   -------------------------------------------------------------------------- */

console.log(Math.max(10, 50, 30)); // 50
console.log(Math.min(10, 50, 30)); // 10
console.log(Math.round(4.7));       // 5
console.log(Math.floor(4.7));       // 4
console.log(Math.random());         // Random value [0, 1)


/* ==========================================================================
   CHAPTER 10: ITERATIVE OPERATION
   ========================================================================== */

/* --------------------------------------------------------------------------
   LESSON 10.1: NEWLINE & INDENTATION IN PROGRAMS
   --------------------------------------------------------------------------
   - Line breaks: A program breaks onto a new line after an opening left 
     curly bracket "{" appears, and before a closing right curly bracket "}" appears.
   - Indentation: The practice of inserting spaces at the beginning of a line 
     inside curly braces to make code structured and easy to read.
*/
if (score >= 80) {
    console.log("New line starts after opening left curly bracket {");
    console.log("Indentation (spaces) added for inner statements");
} // New line before closing right curly bracket }


/* --------------------------------------------------------------------------
   LESSON 10.2: ITERATIVE PROCESS (FOR LOOP)
   -------------------------------------------------------------------------- */
for (let i = 0; i < 10; i++) {
    console.log("hi");
}


/* --------------------------------------------------------------------------
   LESSON 10.3: INCREMENT OPERATORS (++, +=)
   -------------------------------------------------------------------------- */
let count = 0;
count++;    // count becomes 1 (short for count = count + 1)
count += 5; // count becomes 6 (short for count = count + 5)