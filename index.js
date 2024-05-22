#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold.italic("\n\t..........SCRAMBLED WORD GAME..........\t\n"));
//list of words
const Words = [
    "javascript",
    "microbiology",
    "jupiter",
    "sofa",
    "east",
    "coast",
    "sequence",
    "energy",
    "arabian rice",
    "limca",
    "badminton",
    "joggers",
];
//list of hint
const Hint = [
    "programming language 💻",
    "a type of study 🔬",
    "planet 🌌",
    "type of furniture 🛋️",
    "geographical feature 🌍",
    "mythological creature 🐉",
    "mathematical concept ➗",
    "physical phenomenon ⚛️",
    "type of food 🍚",
    "a type of drink 🍹",
    "game 🏸",
    "type of footwear 👟",
];
//initialize the display
let displayWord = "";
let displayHint = "";
//function for shuffling words
function shuffle(str) {
    const strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        // Swap letters
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join("");
}
// Function to refresh and show new word
function refresh() {
    const index = Math.floor(Math.random() * Words.length);
    displayWord = Words[index];
    displayHint = Hint[index];
}
// Main function to run the game
async function runGame() {
    refresh();
    const shuffledWord = shuffle(displayWord);
    console.log((`Shuffled word: ${chalk.cyan(shuffledWord)}`));
    console.log((`Hint: ${chalk.yellow(displayHint)}`));
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Guess the word:",
        },
    ]);
    const userGuess = answers.userGuess;
    if (userGuess.toLowerCase() === displayWord.toLowerCase()) {
        console.log(chalk.cyan.bold(" Correct :) ... You win..🎉 "));
    }
    else {
        console.log(chalk.red.bold("Incorrect :(  ... You lost..❌ "));
    }
}
// Start the game
runGame();
