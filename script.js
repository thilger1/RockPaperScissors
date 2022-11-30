
const playerScore = 0;
const computerScore = 0;
const showPlayerScore = document.getElementById('playerScore');
const showComputerScore = document.getElementById('computerScore');

function getComputerChoice(){
    let answer = Math.floor(Math.random() * 3);
    if (answer == 0){
        answer = 'rock';
    }
    else if (answer == 1){
        answer = 'paper';
    }
    else {
        answer = 'scissors';
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
    let gameInfo = document.getElementById("game-info");

    gameInfo.textContent = "You win! " + playerChoice + " beats " + computerChoice;
    return score(1);
}

function lose(player, computer){
    let playerChoice = player;
    let computerChoice = computer;
    let gameInfo = document.getElementById("game-info");

    gameInfo.textContent = "You lost! " + computerChoice + " beats " + playerChoice;
    return score(0);
}

function round(player, computer){

    
    let computerChoice = computer;
    let playerChoice = player;
    let gameInfo = document.getElementById("game-info");

    
    if (computerChoice == playerChoice){
        gameInfo.textContent = playerChoice + " ties " + playerChoice + "!";
    }
    // Computer Rock
    else if(computerChoice == "rock"){
        if (playerChoice == "paper"){
            win(playerChoice, computerChoice);
        }
        else{
            return lose(playerChoice, computerChoice);
        }
    }
    // Computer Paper
    else if (computerChoice == "paper"){
        if (playerChoice == "rock"){
            return lose(playerChoice, computerChoice);
        }
        else{
            return win(playerChoice, computerChoice);
        }
    }
    // Computer Scissors
    else if (computerChoice == "scissors"){
        if (playerChoice == "rock"){
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



function score(result){
    if (playerScore == 5){
        return reset(1);
    }
    else if (computerScore == 5){
        return reset(0);
    }
    else{
        if (result == 1){
            playerScore += 1;
            showPlayerScore.textContent = `You: ${playerScore}`;
            }
        if (result == 0){
            computerScore += 1;
            showComputerScore.textContent = `Computer: ${computerScore}`; 
        }
    }
    
}

function reset(result){
    if (result == 1){
        alert("Game over, you win!")
    }
    else{
        alert("Game over, you lose!")
    }
    playerScore = 0;
    computerScore = 0;
    return;
}

function start(){
    alert("Welcome to RPS! You will now play games against the computer")
    playRound(5)
}

const btn = document.querySelectorAll('button');
const player = document.getElementById('playerChoice');
const computer = document.getElementById('computerChoice');

btn.forEach((button) =>{
    button.addEventListener('click', function (e) {
        let playerChoice = button.id
        if (playerChoice == "rock"){
            player.src="images/rock.png"
        }
        if (playerChoice == "paper"){
            player.src="images/paper.png"
        }
        if (playerChoice == "scissors"){
            player.src="images/scissors.png"
        }
        let computerChoice = getComputerChoice();
        if (computerChoice == "rock"){
            computer.src="images/rock.png"
        }
        if (computerChoice == "paper"){
            computer.src="images/paper.png"
        }
        if (computerChoice == "scissors"){
            computer.src="images/scissors.png"
        }

        round(playerChoice, computerChoice);
    
    });
});

