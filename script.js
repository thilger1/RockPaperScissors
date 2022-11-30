

function getComputerChoice(){
    let answer = Math.floor(Math.random() * 3);
    if (answer == 0){
        answer = 'Rock';
    }
    else if (answer == 1){
        answer = 'Paper';
    }
    else {
        answer = 'Scissors';
    }
    return answer
}

function getPlayerChoice(){
    // prompting player for choice and enabling input exceptions
    let playerChoice = prompt("What do you choose? (Rock/Paper/Scissors)");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice.includes('rock')){
        playerChoice = "Rock";
    }
    else if (playerChoice.includes('paper')){
        playerChoice = "Paper";
    }
    else if (playerChoice.includes('scissors')){
        playerChoice = "Scissors";
    }
    else {
        alert("Sorry, I did not understand your entry");
        return getPlayerChoice();
    }

    return playerChoice;

}

function win(player, computer){
    let playerChoice = player;
    let computerChoice = computer;
    alert("You win! " + playerChoice + " beats " + computerChoice)
    return 1;
}

function lose(player, computer){
    let playerChoice = player;
    let computerChoice = computer;
    alert("You lose! " + computerChoice + " beats " + playerChoice)
    return 0;
}

function round(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log("You chose: " + playerChoice);
    console.log("Computer chooses: " + computerChoice);
    
    if (computerChoice == playerChoice){
        alert("Tie!")
    }
    // Computer Rock
    else if(computerChoice == "Rock"){
        if (playerChoice == "Paper"){
            win(playerChoice, computerChoice);
        }
        else{
            return lose(playerChoice, computerChoice);
        }
    }
    // Computer Paper
    else if (computerChoice == "Paper"){
        if (playerChoice == "Rock"){
            return lose(playerChoice, computerChoice);
        }
        else{
            return win(playerChoice, computerChoice);
        }
    }
    // Computer Scissors
    else if (computerChoice == "Scissors"){
        if (playerChoice == "Rock"){
            return win(playerChoice, computerChoice);
        }
        else{
            return lose(playerChoice, computerChoice);
        }
    }
}

function playRound(games){
    let winCount = 0;
    let loseCount = 0;
    while (winCount < games && loseCount < games){
        let didWin = round()
        if (didWin == 1){
            winCount += 1;
        }
        else if (didWin == 0){
            loseCount += 1; 
        }
        alert("You: " + winCount + "\nComputer: " + loseCount)
    }
    if (winCount == games){
        alert("You won the game! Congratulations!")
    }
    else{
        alert("The computer won! Play again!")

    }

}

function start(){
    alert("Welcome to RPS! You will now play games against the computer")
    playRound(5)
}

const btn = document.querySelectorAll('button');
const player = document.getElementById('playerChoice');

btn.forEach((button) =>{
    button.addEventListener('click', function (e) {
        let choice = button.id
        if (choice == "rock"){
            player.src="images/rock.png"
        }
        if (choice == "paper"){
            player.src="images/paper.png"
        }
        if (choice == "scissors"){
            player.src="images/scissors.png"
        }
    });
});

