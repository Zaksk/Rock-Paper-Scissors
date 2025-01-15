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
        
        // Create the prompt function using inquirer.createPromptModule()
        const prompt = inquirer.createPromptModule();

        // Prompt the user for a choice using inquirer
        let userChoice = await prompt({
            type: 'list',
            name: 'choice',
            message: 'Enter your choice (rock, paper, or scissors):',
            choices: options
        });

        this.choice = userChoice.choice;
    }
}

const game1 = new HumanPlayer("Mark");

game1.pickChoice().then(() => {
    console.log(game1);
});
