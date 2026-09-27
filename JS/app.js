/* ==========================================================================
   SPRIX OFFICIAL LEARNING PORTAL - MAIN JS APPLICATION ENGINE
   Curriculum Engine with Chapter Open State Preservation
   ========================================================================== */

(function () {
    'use strict';

    // Official Curriculum Data matching User Specification
    const curriculumData = {
        javascript: [
            // Chapter 1: Introduction
            {
                chapterId: 'js-ch1',
                chapterNumber: 'Ch 1',
                chapterTitle: 'Introduction',
                lessons: [
                    {
                        id: 'js-1-1',
                        lessonNumber: '1.1',
                        category: 'js',
                        title: 'What is Programming',
                        readTime: '3 min read',
                        spec: 'Programming Core Concepts',
                        description: 'Programming is the process of writing precise instructions for a computer to perform tasks, build software, automate operations, and solve problems. In web development, programming languages like JavaScript enable web applications to respond dynamically to user actions.',
                        specNote: 'Conceptual Overview: Programming is about logical problem-solving and giving clear instructions to computers.',
                        code: ''
                    },
                    {
                        id: 'js-1-2',
                        lessonNumber: '1.2',
                        category: 'js',
                        title: 'How to Use an Editor',
                        readTime: '3 min read',
                        spec: 'Developer Environment',
                        description: 'A code editor (such as VS Code or an integrated IDE) is a software tool used to write, edit, and manage code files. Code editors provide helpful developer features like syntax highlighting, auto-indentation, file navigation, and error checking.',
                        specNote: 'Conceptual Overview: Code editors are where developers write and save program files before running them.',
                        code: ''
                    },
                    {
                        id: 'js-1-3',
                        lessonNumber: '1.3',
                        category: 'js',
                        title: 'Console',
                        readTime: '2 min read',
                        spec: 'Developer Console Output API',
                        description: 'The console is the primary developer interface for displaying messages, testing calculations, and debugging errors. The console.log() method outputs data to the browser developer console.',
                        specNote: 'Usage: Open your browser inspect panel (F12 or right-click -> Inspect -> Console) to see console outputs.',
                        code: `// Outputting text to the console
console.log("Hello, World!");
console.log("Welcome to Sprix Portal");`
                    },
                    {
                        id: 'js-1-4',
                        lessonNumber: '1.4',
                        category: 'js',
                        title: 'Comment',
                        readTime: '2 min read',
                        spec: 'Single-line & Multi-line Documentation',
                        description: 'Comments are notes written in code that are ignored by the JavaScript engine during execution. They explain what code does for yourself and other developers.',
                        specNote: 'Syntax: Use // for single-line comments and /* ... */ for multi-line comments.',
                        code: `// This is a single-line comment

/* This is a 
   multi-line comment 
   spanning multiple lines */
console.log("Comments do not affect code execution");`
                    },
                    {
                        id: 'js-1-5',
                        lessonNumber: '1.5',
                        category: 'js',
                        title: 'Comment Out',
                        readTime: '2 min read',
                        spec: 'Debugging & Code Disabling',
                        description: '"Commenting out" means temporarily converting a line of code into a comment so it won\'t run. This is extremely useful when testing and debugging code.',
                        specNote: 'Shortcut: Highlight lines in VS Code and press Ctrl+/ (or Cmd+/) to toggle comments.',
                        code: `console.log("This line will execute");

// console.log("This line is commented out and WILL NOT execute");

console.log("This line will also execute");`
                    }
                ]
            },

            // Chapter 2: Calculations and Strings
            {
                chapterId: 'js-ch2',
                chapterNumber: 'Ch 2',
                chapterTitle: 'Calculations and Strings',
                lessons: [
                    {
                        id: 'js-2-1',
                        lessonNumber: '2.1',
                        category: 'js',
                        title: 'How to Output to the Console',
                        readTime: '3 min read',
                        spec: 'Console Output & String vs Number Literals',
                        description: 'You can pass strings (text inside quotes) or numbers directly into console.log(). Quotes distinguish literal text from numeric calculations.',
                        specNote: 'Difference: "1+1" inside quotes is printed as literal text "1+1", whereas 1+1 without quotes is calculated as 2.',
                        code: `console.log("1+1"); // Outputs literal string: 1+1
console.log(1+1);   // Outputs numeric calculation: 2`
                    },
                    {
                        id: 'js-2-2',
                        lessonNumber: '2.2',
                        category: 'js',
                        title: 'Calculation Method',
                        readTime: '3 min read',
                        spec: 'Arithmetic Operators & Precedence',
                        description: 'JavaScript performs arithmetic operations using +, -, *, /, and %. Standard mathematical order of precedence applies (multiplication/division before addition/subtraction, parentheses first).',
                        specNote: 'Parentheses: Use ( ) to override precedence rules and force specific order of calculations.',
                        code: `console.log(10 + 5);     // Addition: 15
console.log(20 - 4);     // Subtraction: 16
console.log(6 * 7);      // Multiplication: 42
console.log(100 / 4);    // Division: 25
console.log(10 + 5 * 2); // Multiplication first: 20
console.log((10 + 5) * 2); // Parentheses first: 30`
                    },
                    {
                        id: 'js-2-3',
                        lessonNumber: '2.3',
                        category: 'js',
                        title: 'Consolidation',
                        readTime: '3 min read',
                        spec: 'String Concatenation & Mixed Expressions',
                        description: 'Consolidation combines text and calculation outputs together using the + operator for string concatenation.',
                        specNote: 'Concatenation Rule: When adding a string to a number, JavaScript converts the number to a string.',
                        code: `console.log("Total points: " + 100);
console.log("Score: " + (50 + 40) + " points");`
                    }
                ]
            },

            // Chapter 3: Variables
            {
                chapterId: 'js-ch3',
                chapterNumber: 'Ch 3',
                chapterTitle: 'Variables',
                lessons: [
                    {
                        id: 'js-3-1',
                        lessonNumber: '3.1',
                        category: 'js',
                        title: 'Declaration and Assignments',
                        readTime: '3 min read',
                        spec: 'Variable Allocation (let)',
                        description: 'Variables store data values in memory. Use "let" to declare a variable and assign a value using the equals sign =. The value stored in a "let" variable can be updated later in the program.',
                        specNote: 'Assignment: The single equals sign = assigns the value on the right to the variable name on the left.',
                        code: `// Declare a variable with let:
let x;

// Assign a value to a variable:
let y = 2; // y stores the number 2

// Update a variable's value:
y = 5; // y now stores 5
console.log(y);`
                    }
                ]
            },

            // Chapter 4: Test 1 Knowledge Assessment
            {
                chapterId: 'js-ch4',
                chapterNumber: 'Ch 4',
                chapterTitle: 'Test 1 Knowledge Check',
                isTest: true,
                isLocked: false,
                testQuestions: [
                    {
                        id: 'q1',
                        type: 'mcq',
                        question: '1. Select the correct program to output "Hello" to the console.',
                        options: [
                            'console.log("Hello");',
                            'log.console("Hello");',
                            'consolelog("Hello")',
                            'console.logHello;'
                        ],
                        correctIndex: 0,
                        explanation: 'console.log("Hello"); is the standard JavaScript method to print output to the developer console.'
                    },
                    {
                        id: 'q2',
                        type: 'code',
                        question: '2. Output "Hello" to the console.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'Hello',
                        expectedAnswer: 'console.log("Hello");',
                        explanation: 'Use console.log("Hello"); to output the string "Hello".'
                    },
                    {
                        id: 'q3',
                        type: 'code',
                        question: '3. Create your program as follows:\nChange "Leave this text." to a comment.\n*Execute the program and it will output "Make the first line a comment."',
                        initialCode: 'Leave this text.\nconsole.log("Make the first line a comment.");',
                        expectedOutput: 'Make the first line a comment.',
                        expectedAnswer: '//Leave this text.\nconsole.log("Make the first line a comment.");',
                        explanation: 'Add // at the start of the first line to convert it into a single-line comment.'
                    },
                    {
                        id: 'q4',
                        type: 'mcq',
                        question: '4. Select the correct program that will let the computer calculate "5+7" and output the calculation results to the console.',
                        options: [
                            'console.log(5" + "7);',
                            'console.log("5" + "7");',
                            'console.log("5 + 7");',
                            'console.log(5 + 7);'
                        ],
                        correctIndex: 3,
                        explanation: 'console.log(5 + 7); evaluates the mathematical addition (12) without quotes.'
                    },
                    {
                        id: 'q5',
                        type: 'mcq',
                        question: '5. Select the correct symbol for multiplication used in the program.',
                        options: [
                            '/',
                            '+',
                            '-',
                            '*'
                        ],
                        correctIndex: 3,
                        explanation: 'The asterisk (*) is the operator for multiplication in programming.'
                    },
                    {
                        id: 'q6',
                        type: 'code',
                        question: '6. Let the computer calculate "3*5" and output "The answer is 15." to the console.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'The answer is 15.',
                        expectedAnswer: 'console.log("The answer is " + (3 * 5) + ".");',
                        explanation: 'console.log("The answer is " + (3 * 5) + "."); concatenates text string with the calculation result.'
                    },
                    {
                        id: 'q7',
                        type: 'mcq',
                        question: '7. Select the correct declaration for the variable number.',
                        options: [
                            'number;',
                            'let number;',
                            'let = number;',
                            'number let;'
                        ],
                        correctIndex: 1,
                        explanation: 'let number; uses the keyword let followed by the variable name.'
                    },
                    {
                        id: 'q8',
                        type: 'code',
                        question: '8. Create your program as follows:\n(1) Declare the variable num.\n(2) Assign 5 to num.\n(3) Output the value of num to the console.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: '5',
                        expectedAnswer: 'let num;\nnum = 5;\nconsole.log(num);',
                        explanation: 'Declare with let num;, assign with num = 5;, and output with console.log(num);'
                    }
                ],
                lessons: [
                    {
                        id: 'js-4-test',
                        lessonNumber: '4.0',
                        category: 'js',
                        title: 'Test 1 Assessment',
                        readTime: '10 min assessment',
                        spec: 'Interactive Test 1',
                        description: 'Complete the 8 questions below (multiple-choice and live code editor problems) covering Chapters 1 to 3.',
                        specNote: 'Click Submit Quiz Answers after filling out your responses to test your code.',
                        code: `// Test 1 Assessment: Complete all 8 problems below`
                    }
                ]
            },

            // Chapter 5: IF Statement
            {
                chapterId: 'js-ch5',
                chapterNumber: 'Ch 5',
                chapterTitle: 'IF Statement',
                lessons: [
                    {
                        id: 'js-5-1',
                        lessonNumber: '5.1',
                        category: 'js',
                        title: 'How to Write Variables',
                        readTime: '3 min read',
                        spec: 'Variable Scope & Prep for Conditionals',
                        description: 'Before writing conditionals, initialize variables with values (like scores, ranks, or status) that will be tested in conditional expressions.',
                        specNote: 'Initialization: Always assign an initial value to your variable before testing it in an if statement.',
                        code: `let y = 2;
let score = 85;
let isLoggedIn = true;`
                    },
                    {
                        id: 'js-5-2',
                        lessonNumber: '5.2',
                        category: 'js',
                        title: 'IF Statement Syntax',
                        readTime: '3 min read',
                        spec: 'Conditional Statement Structure',
                        description: 'An if statement executes a block of code enclosed in curly braces { } only if its condition inside parentheses ( ) evaluates to true.',
                        specNote: 'Syntax Rule: if (condition) { // code to run if true }',
                        code: `let y = 2;

// IF statement check:
if (y > 1) {
    console.log("y is greater than 1");
}`
                    },
                    {
                        id: 'js-5-3',
                        lessonNumber: '5.3',
                        category: 'js',
                        title: 'How IF Statement Works',
                        readTime: '3 min read',
                        spec: 'Boolean Evaluation Mechanics',
                        description: 'The condition inside parentheses is evaluated as a boolean (true or false). If true, the code inside { } runs. If false, the code inside { } is skipped completely.',
                        specNote: 'Execution: If y = 0 in y > 1, the condition evaluates to false and console.log does not run.',
                        code: `let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}`
                    }
                ]
            },

            // Chapter 6: IF-ELSE Statement
            {
                chapterId: 'js-ch6',
                chapterNumber: 'Ch 6',
                chapterTitle: 'IF-ELSE Statement',
                lessons: [
                    {
                        id: 'js-6-1',
                        lessonNumber: '6.1',
                        category: 'js',
                        title: 'IF-ELSE Statement',
                        readTime: '3 min read',
                        spec: 'Dual Branching Control Flow',
                        description: 'An if-else statement provides a fallback code block. If the if condition is true, the if block runs. If the if condition is false, the else block runs.',
                        specNote: 'Rule: The else block runs ONLY when the initial if condition is false.',
                        code: `let y = 2;

if (y > 1) {
    console.log("y is greater than 1");
} else { // else = if the first condition is false do this
    console.log("y is less than or equal to 1");
}`
                    },
                    {
                        id: 'js-6-2',
                        lessonNumber: '6.2',
                        category: 'js',
                        title: 'Operators (Comparison)',
                        readTime: '4 min read',
                        spec: 'Comparison Operators (==, ===, >, <, >=, <=)',
                        description: 'Comparison operators compare two values in conditional checks. Loose equal == checks values; strict equal === checks values AND data types strictly.',
                        specNote: 'Strictness: Always prefer === over == to prevent implicit type conversion bugs.',
                        code: `console.log(1 == "1");  // true  (loose equality - ignores type)
console.log(1 === "1"); // false (strict equality - compares type too)

// Comparison operators:
// >  (greater than)
// <  (less than)
// >= (greater than or equal to)
// <= (less than or equal to)`
                    }
                ]
            },

            // Chapter 7: Else IF
            {
                chapterId: 'js-ch7',
                chapterNumber: 'Ch 7',
                chapterTitle: 'Else IF',
                lessons: [
                    {
                        id: 'js-7-1',
                        lessonNumber: '7.1',
                        category: 'js',
                        title: 'Else IF Statement',
                        readTime: '4 min read',
                        spec: 'Multi-Branch Conditional Chaining',
                        description: 'When you have more than two possible outcomes, use "else if" to check secondary conditions if the first condition evaluates to false.',
                        specNote: 'Flow: Conditions are evaluated top to bottom. As soon as one condition evaluates to true, its block runs and the remaining branches are skipped.',
                        code: `let y = 2;

if (y > 1) {
    console.log("y is greater than 1");
} else if (y < 1) { // else if = if the first condition is false check this condition
    console.log("y is less than 1");
} else {
    console.log("y is equal to 1");
}`
                    }
                ]
            },

            // Chapter 8: Test 2 Breakline Divider
            {
                chapterId: 'js-ch8',
                chapterNumber: 'Ch 8',
                chapterTitle: 'Test 2 Knowledge Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-8-test',
                        lessonNumber: '8.0',
                        category: 'js',
                        title: 'Test 2 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 2',
                        description: '🔒 Test 2 is locked until questions are added by the instructor.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        code: `// 🔒 Test 2 is locked`
                    }
                ]
            },

            // Chapter 9: Logical Operators
            {
                chapterId: 'js-ch9',
                chapterNumber: 'Ch 9',
                chapterTitle: 'Logical Operators',
                lessons: [
                    {
                        id: 'js-9-1',
                        lessonNumber: '9.1',
                        category: 'js',
                        title: 'Logical Operator Syntax',
                        readTime: '3 min read',
                        spec: 'Logical AND (&&), OR (||), NOT (!)',
                        description: 'Logical operators combine or invert boolean checks inside conditional statements.',
                        specNote: 'Key Operators: && means AND; || means OR; ! means NOT.',
                        code: `// && (AND): Both conditions must be true
// || (OR): At least one condition must be true
// !  (NOT): Inverts boolean value (true becomes false)`
                    },
                    {
                        id: 'js-9-2',
                        lessonNumber: '9.2',
                        category: 'js',
                        title: 'Use of Logical Operators',
                        readTime: '4 min read',
                        spec: 'Combining Boolean Checks in Practice',
                        description: 'Logical operators allow you to test multiple conditions in a single if statement without nesting multiple if blocks.',
                        specNote: 'Example: Checking if a user is eligible based on both age AND active membership status.',
                        code: `let age = 20;
let hasLicense = true;

// Both conditions must be true:
if (age >= 18 && hasLicense) {
    console.log("You can drive");
}

let isWeekend = true;
let isHoliday = false;

// At least one condition must be true:
if (isWeekend || isHoliday) {
    console.log("No work today!");
}`
                    }
                ]
            },

            // Chapter 10: Iterative Operation
            {
                chapterId: 'js-ch10',
                chapterNumber: 'Ch 10',
                chapterTitle: 'Iterative Operation',
                lessons: [
                    {
                        id: 'js-10-1',
                        lessonNumber: '10.1',
                        category: 'js',
                        title: 'Newline & Indentation in Programs',
                        readTime: '3 min read',
                        spec: 'Code Formatting & Readability Standards',
                        description: 'In programming, a new line is started when an opening left curly bracket "{" appears, and before a closing right curly bracket "}" appears. Indentation is the practice of inserting spaces at the beginning of a line to make code structured and easy to read.',
                        specNote: 'Readability Rule: Always indent statements inside curly braces { } to visually represent code blocks clearly.',
                        code: `// Proper Newlines and Indentation Syntax:
if (score >= 80) {
    console.log("New line starts after opening left curly bracket {");
    console.log("Indentation (spaces) added at start of inner lines");
} // New line before closing right curly bracket }`
                    },
                    {
                        id: 'js-10-2',
                        lessonNumber: '10.2',
                        category: 'js',
                        title: 'Iterative Process',
                        readTime: '4 min read',
                        spec: 'For Loop Syntax & Execution Cycle',
                        description: 'An iterative process repeats a block of code multiple times. A for loop uses an index variable (let i = 0), a continuation condition (i < 10), and an increment step (i++).',
                        specNote: 'Loop Parts: for (initialization; condition; increment) { // repeated block }',
                        code: `// To make a loop:
for (let i = 0; i < 10; i++) { // ++ means increment value is 1
    console.log("hi");
}`
                    },
                    {
                        id: 'js-10-3',
                        lessonNumber: '10.3',
                        category: 'js',
                        title: 'Increment',
                        readTime: '3 min read',
                        spec: 'Increment Operators (++, +=)',
                        description: 'Incrementing means increasing a variable value by a specific step. ++ increases by 1 (e.g. i++). += adds a specified value (e.g. i += 2).',
                        specNote: 'Shorthand: i = i + 1 is written as i++. i = i + 3 is written as i++. i += 3 is written as i += 3.',
                        code: `let count = 0;
count++;    // count becomes 1
count += 5; // count becomes 6 (count = count + 5)
console.log("Incremented Count:", count);`
                    }
                ]
            }
        ],

        python: [
            // Py Ch 1: Introduction (Locked)
            {
                chapterId: 'py-ch1',
                chapterNumber: 'Py Ch 1',
                chapterTitle: 'Introduction',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-1-1',
                        lessonNumber: '1.1',
                        category: 'python',
                        title: 'What is Python Programming',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 2: Calculations and Strings (Locked)
            {
                chapterId: 'py-ch2',
                chapterNumber: 'Py Ch 2',
                chapterTitle: 'Calculations and Strings',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-2-1',
                        lessonNumber: '2.1',
                        category: 'python',
                        title: 'Output & Math Calculations',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 3: Variables (Locked)
            {
                chapterId: 'py-ch3',
                chapterNumber: 'Py Ch 3',
                chapterTitle: 'Variables',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-3-1',
                        lessonNumber: '3.1',
                        category: 'python',
                        title: 'Variable Declarations & Assignments',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 4: Test 1 Breakline (Locked)
            {
                chapterId: 'py-ch4',
                chapterNumber: 'Py Ch 4',
                chapterTitle: 'Python Test 1 Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'py-4-test',
                        lessonNumber: '4.0',
                        category: 'python',
                        title: 'Python Test 1 Assessment',
                        isLocked: true,
                        readTime: 'Test',
                        spec: 'Knowledge Check 1',
                        description: '🔒 Python Test 1 questions will be added by the instructor.',
                        specNote: 'Test breakline divider.',
                        code: `# 🔒 Python Assessment 1`
                    }
                ]
            },
            // Py Ch 5: IF Statement (Locked)
            {
                chapterId: 'py-ch5',
                chapterNumber: 'Py Ch 5',
                chapterTitle: 'IF Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-5-1',
                        lessonNumber: '5.1',
                        category: 'python',
                        title: 'IF Statement Syntax',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 6: IF-ELSE Statement (Locked)
            {
                chapterId: 'py-ch6',
                chapterNumber: 'Py Ch 6',
                chapterTitle: 'IF - ELSE Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-6-1',
                        lessonNumber: '6.1',
                        category: 'python',
                        title: 'IF - ELSE Statement',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 7: ELIF Statement (Locked)
            {
                chapterId: 'py-ch7',
                chapterNumber: 'Py Ch 7',
                chapterTitle: 'ELIF Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-7-1',
                        lessonNumber: '7.1',
                        category: 'python',
                        title: 'ELIF Multi-Branch Conditionals',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 8: Test 2 Breakline (Locked)
            {
                chapterId: 'py-ch8',
                chapterNumber: 'Py Ch 8',
                chapterTitle: 'Python Test 2 Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'py-8-test',
                        lessonNumber: '8.0',
                        category: 'python',
                        title: 'Python Test 2 Assessment',
                        isLocked: true,
                        readTime: 'Test',
                        spec: 'Knowledge Check 2',
                        description: '🔒 Python Test 2 questions will be added by the instructor.',
                        specNote: 'Test breakline divider.',
                        code: `# 🔒 Python Assessment 2`
                    }
                ]
            },
            // Py Ch 9: Logical Operator (Locked)
            {
                chapterId: 'py-ch9',
                chapterNumber: 'Py Ch 9',
                chapterTitle: 'Logical Operator',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-9-1',
                        lessonNumber: '9.1',
                        category: 'python',
                        title: 'Logical Operators (and, or, not)',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 10: Iterative Operation (Locked)
            {
                chapterId: 'py-ch10',
                chapterNumber: 'Py Ch 10',
                chapterTitle: 'Iterative Operation',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-10-1',
                        lessonNumber: '10.1',
                        category: 'python',
                        title: 'Iterative Loops (for, range)',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            }
        ]
    };

    // Populate exact chapters 11 to 54 (Marked as LOCKED until instructor adds content)
    const testChapterNumbers = [4, 8, 11, 14, 17, 20, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54];

    const explicitChapterTitles = {
        11: 'Test 3 Assessment',
        12: 'Function 1',
        13: 'Function 2',
        14: 'Test 4 Assessment',
        15: 'Types',
        16: 'Array',
        17: 'Test 5 Assessment',
        18: 'HTML 1',
        19: 'CSS 1',
        20: 'Test 6 Assessment',
        21: 'Conditions 4',
        22: 'Looping 1',
        23: 'Function 3',
        24: 'Test 7 Assessment',
        25: 'Looping 2',
        26: 'Arrays 2',
        27: 'Test 8 Assessment',
        28: 'For of',
        29: 'Conditions 5',
        30: 'Test 9 Assessment',
        31: 'Functions 4',
        32: 'Flowchart',
        33: 'Test 10 Assessment',
        34: 'HTML 2',
        35: 'CSS 2',
        36: 'Test 11 Assessment',
        37: 'switch statements',
        38: 'modulo',
        39: 'Test 12 Assessment',
        40: 'const inequality',
        41: 'while statements',
        42: 'Test 13 Assessment',
        43: 'CSS 3',
        44: 'website creation',
        45: 'Test 14 Assessment',
        46: 'functions / for of / reminders',
        47: 'switch statement 2 / negation',
        48: 'Test 15 Assessment',
        49: 'while statement 2',
        50: 'Arrays 3',
        51: 'Test 16 Assessment',
        52: 'array operation 1',
        53: 'array operation 2',
        54: 'Test 17 Assessment'
    };

    for (let i = 11; i <= 54; i++) {
        let isTestCh = testChapterNumbers.includes(i);
        let title = explicitChapterTitles[i] || `Topic ${i}`;
        let category = (i === 18 || i === 34) ? 'html' : ((i === 19 || i === 35 || i === 43) ? 'css' : 'js');

        curriculumData.javascript.push({
            chapterId: `js-ch${i}`,
            chapterNumber: `Ch ${i}`,
            chapterTitle: title,
            isTest: isTestCh,
            isLocked: true, // Locked until user adds lessons/questions
            testQuestions: [],
            lessons: [
                {
                    id: `js-${i}-1`,
                    lessonNumber: `${i}.1`,
                    category: category,
                    title: title,
                    isLocked: true,
                    readTime: 'Locked',
                    spec: isTestCh ? `Locked Test ${i}` : 'Locked Chapter',
                    description: isTestCh ? `🔒 Test assessment for ${title} is currently locked. Questions will be added by the instructor.` : `🔒 This chapter is currently locked. Content will be added by the instructor.`,
                    specNote: 'Instructor Notice: Content is under preparation.',
                    code: isTestCh ? `// 🔒 Test assessment is locked` : `// 🔒 Chapter content is locked`
                }
            ]
        });
    }

    // State Tracking for Collapsed Chapters (Preserves open state)
    let chapterCollapsedState = {};

    // Toast Notification Floating Alert Helper
    function showToastNotice(title, message, icon = '🔒') {
        const container = document.getElementById('toast-container') || document.body;
        const toast = document.createElement('div');
        toast.className = 'toast-notice';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                <div class="toast-title">${escapeHtml(title)}</div>
                <div class="toast-message">${escapeHtml(message)}</div>
            </div>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3200);
    }

    // Flattened Lessons Index (Only holds unlocked, active lessons for direct navigation)
    let currentLanguage = 'javascript';
    let allLessons = [];
    let testBreaklines = [];

    function updateFlattenedLessons() {
        allLessons = [];
        testBreaklines = [];
        const activeTree = curriculumData[currentLanguage] || [];

        activeTree.forEach((ch) => {
            if (ch.isTest) {
                ch.lessons.forEach(les => {
                    testBreaklines.push({
                        ...les,
                        chapterNumber: ch.chapterNumber,
                        chapterTitle: ch.chapterTitle,
                        chapterId: ch.chapterId,
                        isTest: true
                    });
                });
            } else if (!ch.isLocked) {
                ch.lessons.forEach((les) => {
                    if (!les.isLocked) {
                        allLessons.push({
                            ...les,
                            chapterNumber: ch.chapterNumber,
                            chapterTitle: ch.chapterTitle,
                            chapterId: ch.chapterId,
                            isTest: false,
                            globalIndex: allLessons.length
                        });
                    }
                });
            }
        });
    }

    // Application State
    let activeLessonIndex = 0;
    let currentActiveTest = null;
    let completedLessons = JSON.parse(localStorage.getItem('sprix_completed_lessons') || '[]');
    let storedTestGrades = JSON.parse(localStorage.getItem('sprix_test_grades') || '{}');
    let searchQuery = '';

    // DOM Cache
    const DOM = {
        curriculumTree: document.getElementById('curriculum-tree'),
        globalSearch: document.getElementById('global-search'),
        progressFill: document.getElementById('progress-fill'),
        progressText: document.getElementById('progress-text'),
        themeToggle: document.getElementById('theme-toggle'),
        langTabJs: document.getElementById('lang-tab-js'),
        langTabPy: document.getElementById('lang-tab-py'),

        // Doc View Elements
        breadcrumbChapter: document.getElementById('doc-bc-chapter'),
        breadcrumbLesson: document.getElementById('doc-bc-lesson'),
        docTitle: document.getElementById('doc-title'),
        techTag: document.getElementById('tech-tag'),
        readTime: document.getElementById('read-time'),
        specName: document.getElementById('spec-name'),
        docDescription: document.getElementById('doc-description'),
        specNoteText: document.getElementById('spec-note-text'),
        codeLangLabel: document.getElementById('code-lang-label'),
        codeDisplay: document.getElementById('code-display'),
        copyCodeBtn: document.getElementById('copy-code-btn'),
        markCompletedBtn: document.getElementById('mark-completed-btn'),

        // Quiz Container
        quizContainerCard: document.getElementById('quiz-container-card'),
        quizBody: document.getElementById('quiz-body'),

        // Navigation Buttons
        prevLessonBtn: document.getElementById('prev-lesson-btn'),
        nextLessonBtn: document.getElementById('next-lesson-btn'),
        prevLessonTitle: document.getElementById('prev-lesson-title'),
        nextLessonTitle: document.getElementById('next-lesson-title'),

        // Sandbox
        jsToolsCard: document.getElementById('js-tools-card'),
        jsInput: document.getElementById('js-sandbox-input'),
        runJsBtn: document.getElementById('run-js-btn'),
        jsConsoleOutput: document.getElementById('js-console-output'),

        // View Switching Elements
        homeViewContainer: document.getElementById('home-view-container'),
        workspaceLayout: document.getElementById('workspace-layout'),
        navBtnHome: document.getElementById('nav-btn-home'),
        navBtnCurriculum: document.getElementById('nav-btn-curriculum'),
        brandHomeLink: document.getElementById('brand-home-link'),
        enterCurriculumBtn: document.getElementById('enter-curriculum-btn'),
        heroJsTrackBtn: document.getElementById('hero-js-track-btn'),
        heroPyTrackBtn: document.getElementById('hero-py-track-btn'),

        // Mobile Responsiveness Controls
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        sidebarOverlay: document.getElementById('sidebar-overlay'),
        sidebar: document.getElementById('sidebar'),
        mobileSearchToggle: document.getElementById('mobile-search-toggle'),
        mobileSearchDropdown: document.getElementById('mobile-search-dropdown'),
        mobileGlobalSearch: document.getElementById('mobile-global-search'),
        closeMobileSearch: document.getElementById('close-mobile-search'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text')
    };

    // Mobile Sidebar Drawer Toggle Listeners
    if (DOM.mobileMenuToggle && DOM.sidebarOverlay) {
        DOM.mobileMenuToggle.addEventListener('click', () => {
            DOM.sidebar.classList.toggle('mobile-open');
            DOM.sidebarOverlay.classList.toggle('active');
        });

        DOM.sidebarOverlay.addEventListener('click', () => {
            DOM.sidebar.classList.remove('mobile-open');
            DOM.sidebarOverlay.classList.remove('active');
        });
    }

    // Mobile Search Dropdown Listeners
    if (DOM.mobileSearchToggle && DOM.mobileSearchDropdown) {
        DOM.mobileSearchToggle.addEventListener('click', () => {
            DOM.mobileSearchDropdown.classList.toggle('active');
            if (DOM.mobileSearchDropdown.classList.contains('active') && DOM.mobileGlobalSearch) {
                DOM.mobileGlobalSearch.focus();
            }
        });

        if (DOM.closeMobileSearch) {
            DOM.closeMobileSearch.addEventListener('click', () => {
                DOM.mobileSearchDropdown.classList.remove('active');
            });
        }
    }

    if (DOM.mobileGlobalSearch) {
        DOM.mobileGlobalSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            if (DOM.globalSearch) DOM.globalSearch.value = e.target.value;
            renderCurriculumTree();
        });
    }

    function closeMobileSidebar() {
        if (DOM.sidebar && DOM.sidebarOverlay) {
            DOM.sidebar.classList.remove('mobile-open');
            DOM.sidebarOverlay.classList.remove('active');
        }
    }

    // Render Curriculum Navigation Tree preserving open/collapsed states
    function renderCurriculumTree() {
        DOM.curriculumTree.innerHTML = '';
        const activeTree = curriculumData[currentLanguage] || [];
        const activeLesson = allLessons[activeLessonIndex];

        activeTree.forEach((chapter) => {
            // Check if this chapter is a TEST BREAKLINE
            if (chapter.isTest) {
                const hasQuestions = chapter.testQuestions && chapter.testQuestions.length > 0;
                const gradeRec = storedTestGrades[chapter.chapterId];
                const dividerEl = document.createElement('div');
                const isSelectedTest = currentActiveTest && currentActiveTest.chapterId === chapter.chapterId;
                dividerEl.className = `test-breakline-divider ${isSelectedTest ? 'active' : ''}`;

                let badgeText = escapeHtml(chapter.chapterTitle);
                if (gradeRec) {
                    badgeText += ` — Score: ${gradeRec.score}/${gradeRec.total} (${gradeRec.percentage}%)`;
                } else if (hasQuestions) {
                    badgeText += ' ▶';
                }

                dividerEl.title = hasQuestions ? "Click to open Test Assessment" : "Test Breakline Divider";
                dividerEl.innerHTML = `
                    <div class="test-divider-line"></div>
                    <div class="test-divider-badge">
                        <span>${gradeRec ? '🏆' : '📝'}</span> ${badgeText}
                    </div>
                    <div class="test-divider-line"></div>
                `;

                dividerEl.addEventListener('click', () => {
                    if (hasQuestions) {
                        closeMobileSidebar();
                        selectTestBreakline(chapter);
                    } else {
                        showToastNotice(
                            'Test Breakline Divider',
                            'Tests serve as breaklines between chapters. Questions will be added by the instructor.',
                            '📝'
                        );
                    }
                });

                DOM.curriculumTree.appendChild(dividerEl);
                return;
            }

            // Standard Lesson Chapters
            const visibleLessons = chapter.lessons.filter(lesson => {
                const matchesSearch = searchQuery === '' ||
                    lesson.title.toLowerCase().includes(searchQuery) ||
                    lesson.description.toLowerCase().includes(searchQuery) ||
                    lesson.code.toLowerCase().includes(searchQuery);
                return matchesSearch;
            });

            if (visibleLessons.length === 0) return;

            // Determine if this chapter should be collapsed or open
            const containsActiveLesson = activeLesson && activeLesson.chapterId === chapter.chapterId;
            let isCollapsed = false;

            if (containsActiveLesson) {
                isCollapsed = false;
                chapterCollapsedState[chapter.chapterId] = false;
            } else if (chapterCollapsedState[chapter.chapterId] !== undefined) {
                isCollapsed = chapterCollapsedState[chapter.chapterId];
            } else {
                // Default: Chapters 1, 2, 3 open by default; others collapsed
                isCollapsed = !(chapter.chapterNumber === 'Ch 1' || chapter.chapterNumber === 'Ch 2' || chapter.chapterNumber === 'Ch 3');
                chapterCollapsedState[chapter.chapterId] = isCollapsed;
            }

            const isLockedCh = chapter.isLocked;
            const groupEl = document.createElement('div');
            groupEl.className = `chapter-group ${isCollapsed ? 'collapsed' : ''}`;

            const titleBtn = document.createElement('button');
            titleBtn.className = `chapter-title-btn ${isLockedCh ? 'locked' : ''}`;
            titleBtn.innerHTML = `
                <div>
                    <span class="chapter-number">${chapter.chapterNumber}</span>
                    <span>${escapeHtml(chapter.chapterTitle)} ${isLockedCh ? '🔒' : ''}</span>
                </div>
                <span class="chapter-chevron">▼</span>
            `;

            titleBtn.addEventListener('click', () => {
                if (isLockedCh) {
                    showToastNotice(
                        'Chapter Locked',
                        'This chapter is locked. Content will be added by the instructor.',
                        '🔒'
                    );
                }
                const currentlyCollapsed = groupEl.classList.contains('collapsed');
                if (currentlyCollapsed) {
                    groupEl.classList.remove('collapsed');
                    chapterCollapsedState[chapter.chapterId] = false;
                } else {
                    groupEl.classList.add('collapsed');
                    chapterCollapsedState[chapter.chapterId] = true;
                }
            });

            const lessonsListEl = document.createElement('div');
            lessonsListEl.className = 'chapter-lessons-list';

            visibleLessons.forEach((lesson) => {
                const globalIdx = allLessons.findIndex(l => l.id === lesson.id);
                const isCompleted = completedLessons.includes(lesson.id);
                const isLockedLes = lesson.isLocked || isLockedCh;
                const isActive = !isLockedLes && globalIdx === activeLessonIndex;

                const lessonBtn = document.createElement('button');
                lessonBtn.className = `lesson-item-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isLockedLes ? 'locked' : ''}`;
                lessonBtn.innerHTML = `
                    <span class="lesson-status-icon">${isCompleted ? '✓' : (isLockedLes ? '🔒' : '')}</span>
                    <span class="tech-badge-dot ${lesson.category}"></span>
                    <span style="flex:1;">${lesson.lessonNumber} ${escapeHtml(lesson.title)}</span>
                `;

                lessonBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (isLockedLes) {
                        showToastNotice(
                            'Chapter Locked',
                            'This chapter is locked. Content will be added by the instructor.',
                            '🔒'
                        );
                        return;
                    }
                    closeMobileSidebar();
                    currentActiveTest = null;
                    chapterCollapsedState[chapter.chapterId] = false;
                    selectLesson(globalIdx);
                });

                lessonsListEl.appendChild(lessonBtn);
            });

            groupEl.appendChild(titleBtn);
            groupEl.appendChild(lessonsListEl);
            DOM.curriculumTree.appendChild(groupEl);
        });
    }

    // Select Test Breakline Divider
    function selectTestBreakline(chapter) {
        currentActiveTest = chapter;
        const testLesson = chapter.lessons[0] || {};

        DOM.breadcrumbChapter.innerText = `Knowledge Assessment`;
        DOM.breadcrumbLesson.innerText = chapter.chapterTitle;
        DOM.docTitle.innerText = `📝 ${chapter.chapterTitle}`;

        DOM.techTag.innerText = 'TEST';
        DOM.techTag.className = 'tech-tag js';
        DOM.readTime.innerText = 'Knowledge Quiz';
        DOM.specName.innerText = 'Chapter Assessment';

        DOM.docDescription.innerText = testLesson.description || 'Test your understanding of recent chapter concepts.';
        DOM.specNoteText.innerText = testLesson.specNote || 'Answer all questions to check your mastery.';
        DOM.codeLangLabel.innerText = 'PRACTICE';
        DOM.codeDisplay.innerText = testLesson.code || '// Quiz Code';

        DOM.markCompletedBtn.style.display = 'none';
        DOM.jsToolsCard.style.display = 'none';

        renderQuizView(chapter);
        renderCurriculumTree();
    }

    // Render Test Grade Summary Banner
    function renderGradeBanner(chapter, gradeRecord) {
        let existingBanner = document.getElementById(`grade-banner-${chapter.chapterId}`);
        if (existingBanner) {
            existingBanner.remove();
        }

        const isPassed = gradeRecord.percentage >= 70;
        const banner = document.createElement('div');
        banner.id = `grade-banner-${chapter.chapterId}`;
        banner.className = `test-grade-banner ${isPassed ? 'passed' : 'failed'}`;

        banner.innerHTML = `
            <div class="grade-banner-header">
                <div class="grade-title-section">
                    <span class="grade-icon">${isPassed ? '🏆' : '📊'}</span>
                    <div>
                        <h3 class="grade-headline">${isPassed ? 'Assessment Passed!' : 'Assessment Completed'}</h3>
                        <div class="grade-subtext">${escapeHtml(chapter.chapterTitle)} • Score recorded on ${gradeRecord.date}</div>
                    </div>
                </div>
                <div class="grade-score-pill">${gradeRecord.percentage}%</div>
            </div>

            <div class="grade-metrics-grid">
                <div class="grade-metric-box">
                    <span class="metric-label">Correct Answers</span>
                    <span class="metric-val ${isPassed ? 'text-success' : 'text-warning'}">${gradeRecord.score} / ${gradeRecord.total}</span>
                </div>
                <div class="grade-metric-box">
                    <span class="metric-label">Accuracy Score</span>
                    <span class="metric-val">${gradeRecord.percentage}%</span>
                </div>
                <div class="grade-metric-box">
                    <span class="metric-label">Grade Status</span>
                    <span class="metric-val ${isPassed ? 'text-success' : 'text-warning'}">${isPassed ? 'PASS' : 'RETRY NEEDED'}</span>
                </div>
            </div>
        `;

        DOM.quizBody.prepend(banner);
        banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Render Quiz View with Code Editor & MCQ Support
    function renderQuizView(chapter) {
        const questions = chapter.testQuestions || [];
        if (questions.length === 0) {
            DOM.quizContainerCard.style.display = 'none';
            return;
        }

        DOM.quizContainerCard.style.display = 'block';
        DOM.quizBody.innerHTML = '';

        // If previously taken, show stored Grade Banner
        if (storedTestGrades[chapter.chapterId]) {
            renderGradeBanner(chapter, storedTestGrades[chapter.chapterId]);
        }

        questions.forEach((q, qIdx) => {
            const qBox = document.createElement('div');
            qBox.className = 'quiz-question-card';
            qBox.style.marginBottom = '24px';
            qBox.style.padding = '18px';
            qBox.style.backgroundColor = 'var(--bg-main)';
            qBox.style.borderRadius = 'var(--radius-md)';
            qBox.style.border = '1px solid var(--border-color)';

            const qTitle = document.createElement('div');
            qTitle.style.fontWeight = '600';
            qTitle.style.marginBottom = '12px';
            qTitle.style.fontSize = '0.95rem';
            qTitle.style.whiteSpace = 'pre-line';
            qTitle.innerText = q.question;

            qBox.appendChild(qTitle);

            if (q.type === 'code') {
                // Code Editor / Essay Question
                const editorBox = document.createElement('div');
                editorBox.className = 'code-quiz-wrapper';
                editorBox.style.marginBottom = '12px';
                editorBox.innerHTML = `
                    <div class="code-header" style="border-radius: var(--radius-sm) var(--radius-sm) 0 0;">
                        <span class="code-lang-label">👨‍💻 Code Answer Editor</span>
                        <button class="code-btn reset-code-btn" type="button">Reset Code</button>
                    </div>
                    <textarea class="sandbox-textarea quiz-code-input" id="quiz_code_${qIdx}" spellcheck="false" style="height: 100px; margin-bottom:0; border-radius: 0 0 var(--radius-sm) var(--radius-sm);">${escapeHtml(q.initialCode || '')}</textarea>
                `;

                editorBox.querySelector('.reset-code-btn').addEventListener('click', () => {
                    const textarea = document.getElementById(`quiz_code_${qIdx}`);
                    if (textarea) textarea.value = q.initialCode || '';
                });

                qBox.appendChild(editorBox);
            } else {
                // Multiple Choice Question (MCQ)
                const optionsContainer = document.createElement('div');
                optionsContainer.style.display = 'flex';
                optionsContainer.style.flexDirection = 'column';
                optionsContainer.style.gap = '8px';

                q.options.forEach((opt, oIdx) => {
                    const label = document.createElement('label');
                    label.style.display = 'flex';
                    label.style.alignItems = 'center';
                    label.style.gap = '10px';
                    label.style.padding = '8px 12px';
                    label.style.borderRadius = 'var(--radius-sm)';
                    label.style.border = '1px solid var(--border-color)';
                    label.style.backgroundColor = 'var(--bg-surface)';
                    label.style.cursor = 'pointer';
                    label.style.fontSize = '0.875rem';
                    label.style.fontFamily = 'var(--font-mono)';

                    label.innerHTML = `
                        <input type="radio" name="q_${qIdx}" value="${oIdx}">
                        <span>${escapeHtml(opt)}</span>
                    `;
                    optionsContainer.appendChild(label);
                });

                qBox.appendChild(optionsContainer);
            }

            const feedbackEl = document.createElement('div');
            feedbackEl.id = `feedback_${qIdx}`;
            feedbackEl.style.marginTop = '12px';
            feedbackEl.style.fontSize = '0.85rem';
            feedbackEl.style.padding = '10px 14px';
            feedbackEl.style.borderRadius = 'var(--radius-sm)';
            feedbackEl.style.display = 'none';
            feedbackEl.style.whiteSpace = 'pre-line';

            qBox.appendChild(feedbackEl);
            DOM.quizBody.appendChild(qBox);
        });

        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.style.marginTop = '10px';
        submitBtn.innerText = 'Submit Quiz Answers';
        submitBtn.addEventListener('click', () => {
            // Pre-validation loop: Ensure ALL questions are answered before submitting
            let unansweredQuestions = [];

            questions.forEach((q, qIdx) => {
                if (q.type === 'code') {
                    const userCode = (document.getElementById(`quiz_code_${qIdx}`).value || '').trim();
                    const isBlank = userCode.length === 0 ||
                        userCode === '// Write your code below:' ||
                        userCode === '// Write your code here';
                    if (isBlank) {
                        unansweredQuestions.push(qIdx + 1);
                    }
                } else {
                    const selected = document.querySelector(`input[name="q_${qIdx}"]:checked`);
                    if (!selected) {
                        unansweredQuestions.push(qIdx + 1);
                    }
                }
            });

            if (unansweredQuestions.length > 0) {
                const questionListStr = unansweredQuestions.map(n => `Q${n}`).join(', ');
                showToastNotice(
                    'Incomplete Assessment',
                    `Please complete all questions before submitting! Unanswered: ${questionListStr}`,
                    '⚠️'
                );

                // Highlight and scroll to the first unanswered question
                const firstUnansweredIdx = unansweredQuestions[0] - 1;
                const questionCards = document.querySelectorAll('.quiz-question-card');
                const targetCard = questionCards[firstUnansweredIdx];
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetCard.style.borderColor = '#f87171';
                    setTimeout(() => {
                        targetCard.style.borderColor = 'var(--border-color)';
                    }, 2500);
                }
                return; // STOP execution completely! Do NOT show correct answers!
            }

            // All questions answered: Evaluate answers & calculate final grade
            let totalCorrect = 0;
            const totalQuestions = questions.length;

            questions.forEach((q, qIdx) => {
                const feedbackEl = document.getElementById(`feedback_${qIdx}`);
                feedbackEl.style.display = 'block';

                let isSuccess = false;

                if (q.type === 'code') {
                    const userCode = (document.getElementById(`quiz_code_${qIdx}`).value || '').trim();
                    let logs = [];
                    const origLog = console.log;
                    console.log = function (...args) {
                        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
                    };

                    let executionError = null;

                    try {
                        eval(`(function(){\n${userCode}\n})()`);
                        const output = logs.join('\n').trim();
                        if (q.expectedOutput) {
                            isSuccess = (output === q.expectedOutput.trim());
                        } else {
                            isSuccess = userCode.length > 0;
                        }
                    } catch (err) {
                        executionError = err.message;
                        isSuccess = false;
                    } finally {
                        console.log = origLog;
                    }

                    if (isSuccess) {
                        totalCorrect++;
                        feedbackEl.style.backgroundColor = 'var(--success-bg)';
                        feedbackEl.style.color = 'var(--success-color)';
                        feedbackEl.style.border = '1px solid rgba(5, 150, 105, 0.3)';
                        feedbackEl.innerText = `✓ Correct! Executed Output: "${logs.join('\\n')}"\n${q.explanation}`;
                    } else {
                        feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
                        feedbackEl.style.color = '#f87171';
                        feedbackEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
                        let errText = executionError ? `Runtime Error: ${executionError}` : `Console Output: "${logs.join('\\n') || '(no output)'}"`;
                        feedbackEl.innerText = `✗ ${errText}\nExpected output: "${q.expectedOutput}"\nExpected Solution:\n${q.expectedAnswer}\n${q.explanation}`;
                    }
                } else {
                    const selected = document.querySelector(`input[name="q_${qIdx}"]:checked`);
                    if (selected && parseInt(selected.value, 10) === q.correctIndex) {
                        isSuccess = true;
                        totalCorrect++;
                        feedbackEl.style.backgroundColor = 'var(--success-bg)';
                        feedbackEl.style.color = 'var(--success-color)';
                        feedbackEl.style.border = '1px solid rgba(5, 150, 105, 0.3)';
                        feedbackEl.innerText = `✓ Correct! ${q.explanation}`;
                    } else {
                        feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
                        feedbackEl.style.color = '#f87171';
                        feedbackEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
                        const correctOpt = q.options[q.correctIndex];
                        feedbackEl.innerText = `✗ Incorrect. Correct answer: ${correctOpt}\n${q.explanation}`;
                    }
                }
            });

            // Calculate Grade Record (No persistence)
            const percentage = Math.round((totalCorrect / totalQuestions) * 100);
            const gradeRecord = {
                score: totalCorrect,
                total: totalQuestions,
                percentage: percentage,
                date: new Date().toLocaleDateString()
            };

            renderGradeBanner(chapter, gradeRecord);
        });

        // Add Show Answers / Solutions Button
        const showAnswersBtn = document.createElement('button');
        showAnswersBtn.className = 'code-btn';
        showAnswersBtn.type = 'button';
        showAnswersBtn.style.padding = '8px 16px';
        showAnswersBtn.style.fontSize = '0.875rem';
        showAnswersBtn.style.backgroundColor = 'var(--bg-main)';
        showAnswersBtn.innerText = '💡 Show Answers & Solutions';

        let answersVisible = false;

        showAnswersBtn.addEventListener('click', () => {
            answersVisible = !answersVisible;
            showAnswersBtn.innerText = answersVisible ? '🙈 Hide Answers' : '💡 Show Answers & Solutions';

            questions.forEach((q, qIdx) => {
                const feedbackEl = document.getElementById(`feedback_${qIdx}`);
                if (!feedbackEl) return;

                if (answersVisible) {
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.backgroundColor = 'var(--bg-surface)';
                    feedbackEl.style.color = 'var(--text-primary)';
                    feedbackEl.style.border = '1px solid var(--accent-primary)';

                    if (q.type === 'code') {
                        feedbackEl.innerText = `💡 Solution & Model Answer:\n\nExpected Code:\n${q.expectedAnswer}\n\nExpected Console Output: "${q.expectedOutput}"\n\nExplanation: ${q.explanation}`;
                    } else {
                        const correctOpt = q.options[q.correctIndex];
                        feedbackEl.innerText = `💡 Correct Answer: Option ${q.correctIndex + 1} (${correctOpt})\n\nExplanation: ${q.explanation}`;
                    }
                } else {
                    feedbackEl.style.display = 'none';
                }
            });
        });

        const btnRow = document.createElement('div');
        btnRow.style.display = 'flex';
        btnRow.style.alignItems = 'center';
        btnRow.style.flexWrap = 'wrap';
        btnRow.style.gap = '12px';
        btnRow.style.marginTop = '16px';

        btnRow.appendChild(submitBtn);
        btnRow.appendChild(showAnswersBtn);
        DOM.quizBody.appendChild(btnRow);
    }

    // Select Active Lesson
    function selectLesson(index) {
        if (index < 0 || index >= allLessons.length) return;
        activeLessonIndex = index;
        currentActiveTest = null;
        const lesson = allLessons[index];

        // Keep chapter expanded
        if (lesson.chapterId) {
            chapterCollapsedState[lesson.chapterId] = false;
        }

        DOM.quizContainerCard.style.display = 'none';

        DOM.breadcrumbChapter.innerText = `${lesson.chapterNumber}: ${lesson.chapterTitle}`;
        DOM.breadcrumbLesson.innerText = `Lesson ${lesson.lessonNumber}`;
        DOM.docTitle.innerText = lesson.title;

        DOM.techTag.innerText = lesson.category.toUpperCase();
        DOM.techTag.className = `tech-tag ${lesson.category}`;
        DOM.readTime.innerText = lesson.readTime;
        DOM.specName.innerText = lesson.spec;

        DOM.docDescription.innerText = lesson.description;
        DOM.specNoteText.innerText = lesson.specNote;
        DOM.codeLangLabel.innerText = lesson.category.toUpperCase();

        const codeWrapper = document.querySelector('.code-block-wrapper');
        if (codeWrapper) {
            if (lesson.code && lesson.code.trim() !== '') {
                codeWrapper.style.display = 'block';
                DOM.codeDisplay.innerText = lesson.code;
            } else {
                codeWrapper.style.display = 'none';
            }
        }

        const isCompleted = completedLessons.includes(lesson.id);
        updateMarkCompletedButtonState(isCompleted);

        if (lesson.category === 'js') {
            DOM.jsToolsCard.style.display = 'block';
        } else {
            DOM.jsToolsCard.style.display = 'none';
        }

        if (index > 0) {
            DOM.prevLessonBtn.style.visibility = 'visible';
            const prev = allLessons[index - 1];
            DOM.prevLessonTitle.innerText = `${prev.lessonNumber} ${prev.title}`;
        } else {
            DOM.prevLessonBtn.style.visibility = 'hidden';
        }

        if (index < allLessons.length - 1) {
            DOM.nextLessonBtn.style.visibility = 'visible';
            const next = allLessons[index + 1];
            DOM.nextLessonTitle.innerText = `${next.lessonNumber} ${next.title}`;
        } else {
            DOM.nextLessonBtn.style.visibility = 'hidden';
        }

        renderCurriculumTree();
    }

    function updateMarkCompletedButtonState(isCompleted) {
        if (isCompleted) {
            DOM.markCompletedBtn.classList.add('is-completed');
            DOM.markCompletedBtn.innerHTML = `<span>✓</span> Completed`;
        } else {
            DOM.markCompletedBtn.classList.remove('is-completed');
            DOM.markCompletedBtn.innerHTML = `<span>○</span> Mark as Completed`;
        }
    }

    DOM.markCompletedBtn.addEventListener('click', () => {
        if (currentActiveTest) return;
        const activeLesson = allLessons[activeLessonIndex];
        const existingIdx = completedLessons.indexOf(activeLesson.id);

        if (existingIdx > -1) {
            completedLessons.splice(existingIdx, 1);
            updateMarkCompletedButtonState(false);
        } else {
            completedLessons.push(activeLesson.id);
            updateMarkCompletedButtonState(true);
        }

        localStorage.setItem('sprix_completed_lessons', JSON.stringify(completedLessons));
        renderCurriculumTree();
    });

    // Language Tab Switchers
    DOM.langTabJs.addEventListener('click', () => {
        currentLanguage = 'javascript';
        DOM.langTabJs.classList.add('active');
        DOM.langTabPy.classList.remove('active');
        chapterCollapsedState = {};
        updateFlattenedLessons();
        renderCurriculumTree();
        selectLesson(0);
    });

    DOM.langTabPy.addEventListener('click', () => {
        currentLanguage = 'python';
        DOM.langTabPy.classList.add('active');
        DOM.langTabJs.classList.remove('active');
        chapterCollapsedState = {};
        updateFlattenedLessons();
        renderCurriculumTree();
        selectLesson(0);
    });

    // Code Copying
    DOM.copyCodeBtn.addEventListener('click', () => {
        const textToCopy = DOM.codeDisplay.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            DOM.copyCodeBtn.innerHTML = `<span style="color:var(--success-color)">✓</span> Copied!`;
            setTimeout(() => {
                DOM.copyCodeBtn.innerHTML = `<span>📋</span> Copy Code`;
            }, 2000);
        });
    });

    // Navigation Buttons
    DOM.prevLessonBtn.addEventListener('click', (e) => {
        e.preventDefault();
        selectLesson(activeLessonIndex - 1);
    });

    DOM.nextLessonBtn.addEventListener('click', (e) => {
        e.preventDefault();
        selectLesson(activeLessonIndex + 1);
    });

    // Global Search
    DOM.globalSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCurriculumTree();
    });

    // Keyboard Shortcut (Ctrl+K)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            DOM.globalSearch.focus();
        }
    });

    // Theme Toggle
    DOM.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        if (DOM.themeIcon) DOM.themeIcon.innerText = isLight ? '☀️' : '🌙';
        if (DOM.themeText) DOM.themeText.innerText = isLight ? 'Light Mode' : 'Dark Mode';
    });

    // Sandbox Runner
    DOM.runJsBtn.addEventListener('click', () => {
        const scriptCode = DOM.jsInput.value;
        DOM.jsConsoleOutput.innerHTML = '';

        const originalLog = console.log;
        let logs = [];

        console.log = function (...args) {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        };

        try {
            const result = eval(`(function(){ ${scriptCode} })()`);

            if (logs.length > 0) {
                logs.forEach(msg => {
                    const line = document.createElement('div');
                    line.className = 'console-entry log';
                    line.innerText = `> ${msg}`;
                    DOM.jsConsoleOutput.appendChild(line);
                });
            } else if (result !== undefined) {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = `Returned: ${result}`;
                DOM.jsConsoleOutput.appendChild(line);
            } else {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = '> Executed cleanly with no console logs.';
                DOM.jsConsoleOutput.appendChild(line);
            }
        } catch (err) {
            const line = document.createElement('div');
            line.className = 'console-entry error';
            line.innerText = `Error: ${err.message}`;
            DOM.jsConsoleOutput.appendChild(line);
        } finally {
            console.log = originalLog;
        }
    });

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // View Switching Functions
    function showHomeView() {
        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'block';
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'none';
        if (DOM.navBtnHome) DOM.navBtnHome.classList.add('active');
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.classList.remove('active');
    }

    function showCurriculumView(track) {
        if (track && (track === 'javascript' || track === 'python')) {
            currentLanguage = track;
            if (track === 'javascript') {
                if (DOM.langTabJs) DOM.langTabJs.classList.add('active');
                if (DOM.langTabPy) DOM.langTabPy.classList.remove('active');
            } else {
                if (DOM.langTabPy) DOM.langTabPy.classList.add('active');
                if (DOM.langTabJs) DOM.langTabJs.classList.remove('active');
            }
            chapterCollapsedState = {};
            updateFlattenedLessons();
            renderCurriculumTree();
        }

        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'none';
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'flex';
        if (DOM.navBtnHome) DOM.navBtnHome.classList.remove('active');
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.classList.add('active');
    }

    if (DOM.navBtnHome) DOM.navBtnHome.addEventListener('click', showHomeView);
    if (DOM.brandHomeLink) DOM.brandHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
    });
    if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.addEventListener('click', () => showCurriculumView());
    if (DOM.enterCurriculumBtn) DOM.enterCurriculumBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroJsTrackBtn) DOM.heroJsTrackBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroPyTrackBtn) DOM.heroPyTrackBtn.addEventListener('click', () => showCurriculumView('python'));

    // Init Application
    updateFlattenedLessons();
    renderCurriculumTree();
    selectLesson(0);
    showHomeView();

})();
