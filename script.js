const player = document.getElementById('playerChoice');
const computer = document.getElementById('computerChoice');

const gameInfo = document.getElementById("game-info");
const gameMessage = document.getElementById('game-message');
const endMessage = document.getElementById('endMessage');
const btn = document.querySelectorAll('.btn');
const reset = document.getElementById('reset');
let winCount = 0;
let loseCount = 0;

//displays player choice and random computer choice and plays round
btn.forEach((button) =>{
    button.addEventListener('click', function (e) {
        

        let playerChoice = button.id
        let computerChoice = getComputerChoice();

        if (playerChoice == "rock"){
            player.src="images/rock.PNG"
        }
        if (playerChoice == "paper"){
            player.src="images/paper.PNG"
        }
        if (playerChoice == "scissors"){
            player.src="images/scissors.PNG"
        }
        if (computerChoice == "rock"){
            computer.src="images/rock.PNG"
        }
        if (computerChoice == "paper"){
            computer.src="images/paper.PNG"
        }
        if (computerChoice == "scissors"){
            computer.src="images/scissors.PNG"
        }

        round(playerChoice, computerChoice);
    });
});

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

function round(player, computer){

    let computerChoice = computer;
    let playerChoice = player;
    
    if (computerChoice == playerChoice){
        gameMessage.textContent = "Tie!";
        gameInfo.textContent = `${capitalize(playerChoice)} ties ${playerChoice}`;
        return;
    }
    // Computer Rock
    else if(computerChoice == "rock"){
        if (playerChoice == "paper"){
            return win(playerChoice, computerChoice);
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

function win(player, computer){
    let playerChoice = player;
    let computerChoice = computer;

    gameMessage.textContent = "You win the round!"
    gameInfo.textContent = `${capitalize(playerChoice)} beats ${computerChoice}`;
    return score(1);
}

function lose(player, computer){
    let playerChoice = player;
    let computerChoice = computer;
    let gameInfo = document.getElementById("game-info");

    gameMessage.textContent = "You lose the round!"
    gameInfo.textContent = `${capitalize(computerChoice)} beats ${playerChoice}`;
    return score(0);
}

function score(result) {

    let playerScore = document.getElementById('playerScore');
    let computerScore = document.getElementById('computerScore');

    if (result == 1){
        winCount += 1;
        playerScore.textContent = `You: ${winCount}`;
    }
    
    if (result == 0){
        loseCount += 1;
        computerScore.textContent = `Computer: ${loseCount}`;
    }
    if (winCount == 5){
        return end(1);
    }
    if (loseCount == 5){
        return end(0);
    }
    return;
}

function end(result){
    let endMessagePar = document.getElementById('endMessagePar');
    if (result == 1){
        endMessageOn();
        endMessagePar.textContent = "You won!";
    }
    else{
        endMessageOn();
        endMessagePar.textContent = "You lost!";
    }
    winCount = 0;
    loseCount = 0;
    gameMessage.textContent = "Play the computer, best of 5 games";
    return;
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function endMessageOn(){
    endMessage.style.display = 'block';
    return;
}

function endMessageOff(){
    endMessage.style.display = "none";
    return;
}

reset.addEventListener('click', function() {
    winCount = 0;
    loseCount = 0;
    playerScore.textContent = 'You: 0';
    computerScore.textContent = 'Computer: 0';
    gameInfo.textContent = "Play the computer, best of 5 games"
    gameMessage.textContent = "Start by pressing any button";
    endMessageOff();
    return;
});

