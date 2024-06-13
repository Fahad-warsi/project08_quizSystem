#! /usr/bin/env node
//QUIZ SYSTEM
import inquirer from "inquirer";
console.log(`Welcome to Code with Fahad Warsi - QUIZ SYSTEM`);
console.log("-".repeat(70));
let ask = await inquirer.prompt([
  {
    name: "UserName",
    type: "input",
    message: "Please enter your Name : ",
  },
]);
console.log("  ".repeat(70));
console.log("-".repeat(70));
console.log(`${ask.UserName}, Welcome to TypeScript Quiz`);
console.log("-".repeat(70));
console.log("  ".repeat(70));
let quiz = await inquirer.prompt([
  {
    name: "quiz1",
    type: "list",
    message: "What are the three main 'simple types' in TypeScript?",
    choices: [
      "Boolean, Number, String",
      "Array,Object,Boolean",
      "Object,String,Number",
      "Object,Array,Symbol",
    ],
  },
  {
    name: "quiz2",
    type: "list",
    message:
      "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
    choices: ["Explicit", "Implicit"],
  },
  {
    name: "quiz3",
    type: "list",
    message:
      "True or False: TypeScript can always correctly infer a variables type.",
    choices: ["True", "False"],
  },
  {
    name: "quiz4",
    type: "list",
    message:
      "______ is similar to 'any', but a safer alternative when uncertain about the type",
    choices: ["unknown", "similar", "never  "],
  },
  {
    name: "quiz5",
    type: "list",
    message:
      "What is the inherited type for the variable example in `const example = ['Dylan']`?",
    choices: ["any[]", "string[]", "string", "unknown[]"],
  },
]);
let quizMarks = 0;
if (quiz.quiz1 === "Boolean, Number, String") {
  //   console.log("Correct Answer");
  quizMarks++;
}
if (quiz.quiz2 === "Explicit") {
  quizMarks++;
}
if (quiz.quiz3 === "False") {
  quizMarks++;
}
if (quiz.quiz4 === "unknown") {
  quizMarks++;
}
if (quiz.quiz5 === "string[]") {
  quizMarks++;
  console.log("Quiz Ended", "-".repeat(60));
  console.log("Your score is : ", quizMarks);
  process.exit();
}
if (quiz.quiz5 !== "string[]") {
  console.log("Quiz Ended", "-".repeat(60));
  console.log("Your score is : ", quizMarks);
} else {
  console.log("Your score is : ", quizMarks);
  console.log("Wrong Answer, Try again...");
  process.exit();
}
