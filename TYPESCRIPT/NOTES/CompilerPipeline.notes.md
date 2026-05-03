# 🚀 TypeScript Compiler Pipeline (ts → js)

> Internal workflow of TypeScript Compiler (tsc)

---

## 🧠 FLOW OVERVIEW

Source (.ts)  
↓  
Lexer → Tokens  
↓  
Parser → AST  
↓  
Binder → Symbols + Flow Graph  
↓  
Checker → Type System  
↓  
Emitter → .js + .d.ts + .map  

---

## 🔹 LEXER (Scanner)

**Purpose:** Convert raw code → tokens  

**Example:**
```ts
let x: number = 10;

Tokens:

let | x | : | number | = | 10 | ;

✔ Removes whitespace/comments
✔ No logic, just splitting

🔹 PARSER

Purpose: Tokens → AST (tree structure)

Example:

VariableDeclaration
 ├── name: x
 ├── type: number
 └── value: 10

✔ Detects syntax errors
✔ Builds structured representation

🔹 AST (Abstract Syntax Tree)

Purpose: Core representation of program

✔ Every node = language construct
✔ Used by all later phases

🔹 BINDER ⚡

Purpose: Connect identifiers → declarations

Creates:

✔ Symbol Table

x → VariableSymbol

✔ Scope Resolution

let x = 10;
function f() { let x = 20; }

✔ Parent Pointers (node navigation)

✔ Flow Nodes (Control Flow Graph)

if (x !== null) { x.toString(); }

🔥 Insight: Without binder → no understanding of code

🔹 CHECKER 🧠

Purpose: Type system + validation

✔ Type Checking

let x: number = "hello"; // ❌

✔ Type Inference

let x = 10; // number

✔ Control Flow Analysis

if (typeof x === "string") { /* x is string */ }

✔ Advanced Types

Generics
Union / Intersection
Conditional Types

✔ Dead Code Detection

if (false) { /* skipped */ }

🔥 Insight: Checker = brain of TypeScript

🔹 EMITTER ⚙️

Purpose: Generate output files

Outputs:

✔ .js

var x = 10;

✔ .d.ts

declare let x: number;

✔ .map (debug mapping)

⚠️ Important: Types are completely removed here

🔄 HIDDEN STEP (Transformation)
AST → Transformers → Modified AST → Emit

Examples:

Arrow → function
ESNext → ES5
🧩 FINAL DIAGRAM
                ┌──────────────┐
                │   Source     │
                │   Code (.ts) │
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │    Lexer     │
                │ (Tokenizing) │
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │    Parser    │
                │ (Build AST)  │
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │     AST      │
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │    Binder    │
                │--------------│
                │ Symbol Table │
                │ Parent Links │
                │ Flow Nodes   │
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │   Checker    │
                │--------------│
                │ Type Check   │
                │ Inference    │
                │ Flow Analysis│
                └──────┬───────┘
                       ↓
                ┌──────────────┐
                │   Emitter    │
                │--------------│
                │ .js Output   │
                │ .d.ts Output │
                │ .map Output  │
                └──────────────┘