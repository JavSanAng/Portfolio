let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.boton-jugada');
const pScore = document.getElementById('contador-usuario');
const cScore = document.getElementById('contador-ordenador');
const text = document.getElementById('demo');

const colors = {
    white: `white`,
    green: '#E9F7EF',
    pink: '#FDEDEC',
};

const determineWinner = (choiceUser, playComputer) => {
    if (choiceUser === playComputer) {
        return 'Empate';
    } else if (
        (choiceUser === 'piedra' && playComputer === 'tijera') ||
        (choiceUser === 'papel' && playComputer === 'piedra') ||
        (choiceUser === 'tijera' && playComputer === 'papel')) {
        return 'player';
    } else {
        return 'computer';
    }
};

const updateScore = (winner) => {
    if (winner === 'player') {
        playerScore++;
        document.body.style.backgroundColor = colors.green;
    } else if (winner === 'computer') {
        computerScore++;
        document.body.style.backgroundColor = colors.pink;
    } else {
        document.body.style.backgroundColor = colors.white;
    }

    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
};

const game = () => {
    buttons.forEach(boton => { 
        boton.addEventListener('click', function(){
            const choiceUser = this.dataset.jugada;
            const choices = ['piedra', 'papel', 'tijera'];
            const choiceComputer = Math.floor(Math.random() * 3);
            const playComputer = choices[choiceComputer];
            
            const winner = determineWinner(choiceUser, playComputer);
            text.innerHTML = (winner === 'Empate') ? 'Empate' : `La máquina ha sacado ${playComputer}`;

            updateScore(winner);
        });
    });
};

game();

// By Javier Santiago Anguis