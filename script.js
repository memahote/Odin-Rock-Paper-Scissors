console.log("Hello World");

let playerScore = 0;
let computerScore = 0;

function addBorderAndPlay(element, choice) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.border = 'none';
    });
    element.style.border = '2px solid goldenrod';
    play(choice);
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	const allImages = document.querySelectorAll('.computer-content img');
	allImages.forEach(image => {
    image.style.border = 'none';
	});
	const cpuImageElement = document.getElementById(`${computerChoice}`);
	cpuImageElement.style.border = '2px solid goldenrod';

    let result = '';
	let resultcolor = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
		resultcolor = 'lightgrey';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
		resultcolor = 'goldenrod'
		playerScore++;
    } else {
        result = 'You lose!';
		resultcolor = 'red'
		computerScore++;
    }
	document.getElementById('player-score').textContent = `Player : ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer : ${computerScore}`;
	document.getElementById('player-choice').innerText = `You chose ${playerChoice}`;
	document.getElementById('computer-choice').innerText = ` Computer chose ${computerChoice}`;
	document.getElementById('winner').innerText = `${result}`;
	document.getElementById('winner').style.color = `${resultcolor}`;
}