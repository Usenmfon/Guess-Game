console.log("===WELCOME TO GUESS THE NUMBER GAME===\n");
let username = prompt("What is your name? ", "");

function Randomizer(range) {
  return Math.floor((Math.random() * (range + 2)) + 1)
}

let randomNumber = Randomizer(0);

let score = 0, stage = 1, option;

function Game() {
  do {
    option = parseInt(prompt(`\nSTAGE ${stage} ::guess the number between 1 and ${stage + 2} ? `, ""))
    if (option == randomNumber) {
      console.log(`${username} You Passed!", you scored ${++score} point(s)`)
    }
    else {
      console.log(`\n${username} Try Again!"`)
    }
  }
  while (option != randomNumber)
}

Game()

do {
  stage++;
  randomNumber = Randomizer(stage)
  Game();
}
while (option == randomNumber)
