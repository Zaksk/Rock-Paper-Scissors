const prompt = require("prompt-sync")();
 
class Player {
    constructor(name) {
        this.name = name;
        this.choice = null;
    }
}
 
class HumanPlayer extends Player {
    constructor(name) {
        super(name);
    }
 
    pickChoice() {
        const options = ['rock', 'paper', 'scissors'];
        let userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
 
        while (!options.includes(userChoice)) {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
            userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
        }
 
        this.choice = userChoice;
    }
}
 
class ComputerPlayer extends Player {
    constructor(name) {
        super(name);
    }
 
    pickChoice() {
        const options = ['rock', 'paper', 'scissors'];
        this.choice = options[Math.floor(Math.random() * options.length)];
    }
}
 
class Game {
    constructor(human, computer) {
        this.human = human;
        this.computer = computer;
    }
 
    play() {
        let continuePlay = true;
        while(continuePlay == true){
            this.human.pickChoice();
            this.computer.pickChoice();
            this.compare();

            const stopPlay = prompt("Do you want to keep playing?").toLowerCase()
            if(stopPlay == "no"){
                continuePlay = false
            }
        }
    }
 
    compare() {
        const humanChoice = this.human.choice;
        const computerChoice = this.computer.choice;
 
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
 
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
}


const humanPlayer = new HumanPlayer("Mark");
const computerPlayer = new ComputerPlayer("Computer");
const game = new Game(humanPlayer, computerPlayer);
game.play();