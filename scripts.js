//Game board module
const gameBoard = (() => {
    let board = [];
    const boardDisplay = document.querySelector('.gameboard');
    
    const add = (choice) => board.push(choice);
     // function that will render the current state of the board.
    const render = () => {

    };
    // function to generate an empty board. The class added to the grid box is the index it will have in the gameboard array.
    const generate = () => {
        let count = 1;

        for (let i = 0; i < 3; i++){
            for (let k = 0; k < 3; k++){
                let square = document.createElement('div');
                square.classList.add(`${count}`);
                boardDisplay.appendChild(square);
                count++;
            }
        }
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
    gameBoard.generate();
})();