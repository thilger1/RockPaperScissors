const player = document.getElementById('playerChoice');
const computer = document.getElementById('computerChoice');

const gameInfo = document.getElementById("game-info");
const btn = document.querySelectorAll('button');
let winCount = 0;
let loseCount = 0;

//displays player choice and random computer choice and plays round
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
        gameInfo.textContent = playerChoice + " ties " + playerChoice + "!";
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
        return reset(1);
    }
    else if (loseCount == 5){
        return reset(0);
    }
    else{
        return;
    }
}

function reset(result){
    if (result == 1){
        alert("Game over, you win!");
    }
    else{
        alert("Game over, you lose!");
    }
    winCount = 0;
    loseCount = 0;
    return;
}



