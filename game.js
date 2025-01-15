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
        console.log("The computer choose " + this.options)
       
    }
}
const game1 = new HumanPlayer("Mark");
 const game2 = new ComputerPlayer("Computer")
game1.pickChoice().then(() => {
    console.log(game1);
});
game2.pickChoice()