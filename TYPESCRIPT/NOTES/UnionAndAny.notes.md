TLDR

The session explains Union Types and the any type in TypeScript, highlighting how unions allow controlled flexibility by defining multiple possible values, while any removes type safety entirely and should generally be avoided. It also demonstrates real-world scenarios like API states and edge cases where union types improve code reliability.


### Introduction to Topics
The session focuses on two key TypeScript concepts:
Union Types
any type
Emphasis:
Union → useful and practical
any → should generally be avoided
### Union Types (Flexible but Controlled Typing)
Definition
Union types allow a variable to hold multiple possible types or values.
Syntax uses the pipe (|) operator.
Basic Example
A variable can accept:
number OR string
Useful when data format is not consistent (e.g., API responses).
Key Concept
You explicitly define:
What values/types are allowed
TypeScript enforces:
Only those defined options can be used
### Real-World Use Case: API Status
Instead of allowing any string, define specific allowed values:
Example states:
"pending"
"success"
"error"
Benefits
Prevents invalid values like "done" or random strings
Improves:
Code reliability
Developer experience (auto-suggestions)
Helps during:
API handling
State management
### Real-World Use Case: Airline Seat Types
Example allowed values:
"aisle"
"window"
"middle"
Why this is powerful
Limits input strictly to valid domain values
Provides:
IntelliSense suggestions
Error prevention
Makes code self-documenting
### Union Types Beyond Basics
Not limited to primitive types (string, number)
Can represent:
Custom value sets
Business logic constraints
Key Insight
Union types are heavily used in:
Production apps
APIs
Form validation
State machines
### Problem Scenario: Uncertain Assignment
Example:
A variable may or may not get a value (e.g., inside a loop)
Issue
TypeScript warns:
Variable might be used before assignment
Solution
Use union with undefined:
Explicitly tell TypeScript:
Value can be missing
Benefit
Handles edge cases safely
Makes code behavior explicit
### The any Type (Danger Zone)
Definition
any disables type checking completely
Behavior
You can assign:
string
number
boolean
anything
Meaning
“I don’t care about type”
Not just “unknown”
But no safety enforced
### Why any is Problematic
Removes all benefits of TypeScript:
No type safety
No error checking
Leads to:
Bugs
Unpredictable behavior
Breaks:
IntelliSense
Code reliability
Example Issue
A variable expected to hold a string:
Can later hold a number without error
Makes debugging harder
### When any Appears
Automatically inferred in some cases:
When TypeScript cannot determine type
Manually used:
Quick fixes
Fast prototyping
Reality Check
Sometimes unavoidable:
Unstructured API data
Rapid development
But:
Should be minimized
### Best Practices (Critical Section)
Avoid any
Always try to:
Define proper types
Use unions instead
Use Union Types Instead
When multiple possibilities exist:
Define them explicitly
Handle Edge Cases Explicitly
Example:
Include undefined when value may not exist