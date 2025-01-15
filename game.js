const inquirer = require('inquirer');
 
class Player {
    constructor(name) {
        this.name = name;
        this.choice = null;
    }
 
    pickChoice() {
        console.log("wrong choice");
    }
}
 
class HumanPlayer extends Player {
    constructor(name) {
        super(name);
    }
 
    async pickChoice() {
        const options = ['rock', 'paper', 'scissors'];
    
        const prompt = inquirer.createPromptModule();
 
        let userChoice = await prompt({
            type: 'list',
            name: 'choice',
            message: 'Enter your choice (rock, paper, or scissors):',
            choices: options
        });
 
        this.choice = userChoice.choice;
    }
}
 
class ComputerPlayer extends Player{
    constructor(name){
        super(name)
    }

     pickChoice(){
        const options = ['rock', 'paper', 'scissors'];
        this.choice = options[Math.floor(Math.random()*options.length)]
        console.log("The computer choose " + this.choice)
       
    }
}


class Game{
    constructor(human,computer){
        this.human = human
        this.computer = computer
    }
    play(){
        game1.pickChoice().then(() => {
            game2.pickChoice()
            this.compare()
            });
    }

    compare(){

        if(this.human.pickChoice() === this.computer.pickChoice()){
            console.log("It is a tie")
        }
        else if(this.human.pickChoice() === "rock" &&this.computer.pickChoice()==="paper"){
            console.log("You lose")
        }
        else if(this.human.pickChoice() === "paper" &&this.computer.pickChoice()==="scissors"){
            console.log("You lose")
        }
        else if(this.human.pickChoice() === "scissors" &&this.computer.pickChoice()==="rock"){
            console.log("You lose")
        }else{
            console.log("You win")
        }
    }
}


const game1 = new HumanPlayer("Mark");
const game2 = new ComputerPlayer("Computer")

const game = new Game(game1, game2)
game.play()