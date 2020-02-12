// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

// const board = document.getElementById('board');
// const columnsInput = document.getElementById('columns-input');
// const rowsInput = document.getElementById('columns-input');
// let userInputRows;
// let userInputColumns;
// const BOARD_SIZE = 600;


// board.style.height = board.style.width = `${BOARD_SIZE}px`;

// renderBoard = () => {
//     if (userInputRows > 0 && userInputColumns > 0) {
//         // *Need to remove the cells from the previous rendering...
//         board.innerHTML = '';

//         board.style.gridTemplateRows = `repeat(${userInputRows}, 1fr)`;
//         board.style.gridTemplateColumns = `repeat(${userInputColumns}, 1fr)`;

//         for (let cellNum = 0; cellNum < userInputRows * userInputColumns; cellNum++) {
//             const cell = document.createElement('div');
//             cell.id = `cell-${cellNum}`;
//             cell.classList.add('cell');
//             board.appendChild(cell);
//         }
//     }
// }

// updateRows = (event) => {
//     ROWS = event.target.value;
//     renderBoard();
// }

// updateColumns = (event) => {
//     COLUMNS = event.target.value;
//     renderBoard();
// }
// columnsInput.addEventListener('blur', updateColumns)
// rowsInput.addEventListener('blur', updateRows)


const board = document.getElementById('board');
const rowsInput = document.getElementById('rows-input');
const columnsInput = document.getElementById('columns-input');

const BOARD_SIZE = 60;
let ROWS, COLUMNS;

// board.style.height = board.style.width = `${BOARD_SIZE}%`;
board.style.height = `${BOARD_SIZE}vh`;
board.style.width = `${BOARD_SIZE}vw`;


renderBoard = () => {
    if (ROWS > 0 && COLUMNS > 0) {
        // *Need to remove the cells from the previous rendering...
        board.innerHTML = '';

        board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;

        for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++) {
            const cell = document.createElement('div');
            cell.id = `cell-${cellNum}`;
            cell.classList.add('cell');
            board.appendChild(cell);
        }
    }
}

handleRows = (e) => {
    ROWS = e.target.value;
    renderBoard();
}

handleColumns = (e) => {
    COLUMNS = e.target.value;
    renderBoard();
}

rowsInput.addEventListener('blur', handleRows);
columnsInput.addEventListener('blur', handleColumns);




function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


board.style.gridTemplateColumns = 'repeat(4, 1fr)';
board.style.gridTemplateRows = 'repeat(4, 1fr)';