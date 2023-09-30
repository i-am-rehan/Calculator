#! /usr/bin/env node
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select operation",
        choices: ["+", "-", "*", "/"],
    },
])
    .then((answers) => {
    if (answers.operation == "+") {
        const result = answers.num1 + answers.num2;
        console.log("Sum", result);
    }
    else if (answers.operation == "-") {
        const result = answers.num1 - answers.num2;
        console.log("Subtraction", result);
    }
    else if (answers.operation == "*") {
        const result = answers.num1 * answers.num2;
        console.log("Multiplication", result);
    }
    else if (answers.operation == "/") {
        const result = answers.num1 / answers.num2;
        console.log("Division", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
