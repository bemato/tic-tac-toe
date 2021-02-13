//Game board module
const gameBoard = (() => {
    let board = [];
    const boardDisplay = document.querySelector('.gameboard');
    
    const add = (index, choice) => board.splice(index, 1, choice);
    // function to generate an empty board. The class added to the grid box is the index it will have in the gameboard array.
    const generate = () => {
        let count = 0;

        for (let i = 0; i < 3; i++){
            for (let k = 0; k < 3; k++){
                let square = document.createElement('div');
                square.classList.add(`${count}`);
                boardDisplay.appendChild(square);
                count++;
            }
        }
    };
    // function that will render the current state of the board.
    const render = (e) => {
        for (let i = 0; i < board.length; i++)
            e.textContent = `${board[i]}`;           
    };

    return { board, add, render, generate };
})(); 

// Player factory function
const Player = (playerName) => {
    const getName = () => playerName;

    return {
        getName,
    };
};
// Gameflow module
const gameFlow = (() => {
    const computerChoice = () => {
        while(true){
            const num = Math.floor(Math.random() * 9);
            let choice = squares[num];

            if (!(choice.textContent)){
                gameBoard.add(parseInt(choice.className), 'O');
                gameBoard.render(choice);
                break;
            }
        }     
    }
    let filled = 0; //how many squares have been filled
    gameBoard.generate();
    
    const squares = document.querySelectorAll('.gameboard div');
    squares.forEach(e => {
        e.addEventListener('click', () => {
            gameBoard.add(parseInt(e.className), 'X');
            gameBoard.render(e);
            if (filled < 8){
                computerChoice();
                filled += 2;
            }   
        });
    });

})();