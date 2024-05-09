#!user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("\n\tLET'S SEE HOW SMART UR"));


let correct_ans = 0; 

//Question1
let asking_question1 = await inquirer.prompt({
    name : "question1",
    message : "\n1) Who is the Father of the Computer?",
    choices : [chalk.yellow("a) CHARLES BABBAGE"),chalk.yellow("b) THOMAS EDISON"),chalk.yellow("c) ISAAC NEWTON")],
    type : "list"
});


if (asking_question1.question1 ===chalk.yellow("a) CHARLES BABBAGE") ) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

//Question2
let asking_question2 = await inquirer.prompt({
    name : "question2",
    message : "\n2) What is the full form of E-Mail?",
    choices : [chalk.yellow("a) ELECTRIC MAIL"),chalk.yellow("b) EXCHANGE MAIL"),chalk.yellow("c) ELECTRONIC MAIL")],
    type : "list"
});

if (asking_question2.question2 ===chalk.yellow("c) ELECTRONIC MAIL") ) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

//Question3
let asking_question3 = await inquirer.prompt({
    name : "question3",
    message : "\n3) In the virtual world, WWW stands for ___________.",
    choices : [chalk.yellow("a) WORLD WITHOUT WINDOWS"),chalk.yellow("b) WORLD WIDE WEB"),chalk.yellow("c) WORLD WIDE WAREHOUSE")],
    type : "list"
});

if (asking_question3.question3 ===chalk.yellow("b) WORLD WIDE WEB")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS"));
}

//Question4
let asking_question4 = await inquirer.prompt({
    name : "question4",
    message : "\n4) What do you call a person who uses the internet to explore and communicate?",
    choices : [chalk.yellow("a) CITIZEN"),chalk.yellow("b) RESIDENT"),chalk.yellow("c) CYBERNAUT")],
    type : "list"
});


if (asking_question4.question4 ===chalk.yellow("c) CYBERNAUT")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

//Question5
let asking_question5 = await inquirer.prompt({
    name : "question5",
    message : "\n5) What do you need to use to connect to the internet?",
    choices : [chalk.yellow("a) MOUSE"),chalk.yellow("b) MODEM"),chalk.yellow("c) CPU")],
    type : "list"
});


if (asking_question5.question5 ===chalk.yellow("b) MODEM")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS"));
}

//Question6
let asking_question6 = await inquirer.prompt({
    name : "question6",
    message : "\n6) Which one of the following is not an Operating System (OS)?",
    choices : [chalk.yellow("a) MS EXCEL"),chalk.yellow("b) WINDOWS 10"),chalk.yellow("c) LINUX")],
    type : "list"
});


if (asking_question6.question6 ===chalk.yellow("a) MS EXCEL")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

//Question7
let asking_question7 = await inquirer.prompt({
    name : "question7",
    message : "\n7) How much is a byte equal to?",
    choices : [chalk.yellow("a) 8 BITS"),chalk.yellow("b) 16 BITS"),chalk.yellow("c) 32 BITS")],
    type : "list"
});


if (asking_question7.question7 ===chalk.yellow("a) 8 BITS")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!!"));
}

//Question8
let asking_question8 = await inquirer.prompt({
    name : "question8",
    message : "\n8) If a computer has more than one processor than it is known as __________.",
    choices : [chalk.yellow("a) MULTI-PROGRAMMING"),chalk.yellow("b) MULTI-THREADED"),chalk.yellow("c) MULTI-PROCESSOR")],
    type : "list"
});


if (asking_question8.question8 ===chalk.yellow("c) MULTI-PROCESSOR")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

//Question9
let asking_question9 = await inquirer.prompt({
    name : "question9",
    message : "\n9) DRAFT,ASAP,and CONFIDENTIAL are types of __________.",
    choices : [chalk.yellow("a) COMMENTS"),chalk.yellow("b) LAYOUTS"),chalk.yellow("c) WATERMARKS")],
    type : "list"
});


if (asking_question9.question9 ===chalk.yellow("c) WATERMARKS")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}


let asking_question10 = await inquirer.prompt({
    name : "question10",
    message : "\n10) Data has integrity when it is ____________.",
    choices : [chalk.yellow("a) PROCESSED"),chalk.yellow("b) COMPLETE"),chalk.yellow("c) OUTDATED")],
    type : "list"
});

//Question10
if (asking_question10.question10 ===chalk.yellow("b) COMPLETE")) {
    console.log(chalk.green("CORRECT ANS"));
    correct_ans++
}else{
    console.log(chalk.red("WRONG ANS!!"));
}

console.log(chalk.blue(`\nYOUR SCORE ${correct_ans}/10`));   


if (correct_ans>7) {
    console.log(chalk.magenta("OH WOW! EXCELLENT"));
}else if(correct_ans <=6 && correct_ans>4){
    console.log(chalk.magenta("NOT BAD"));
}else{
    console.log(chalk.magenta("UR NOT SMART ENOUGH"));
}
