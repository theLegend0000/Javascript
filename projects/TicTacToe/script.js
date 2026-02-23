let boardState = ["","","","","","","","",""];
let currentPlayer = "X";
let playGame = true;
const statusDiv = document.getElementById("status");
const winConditions = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6] // diagonals
];

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("click", handleClick));

function handleClick(e){
    if (!playGame) return; // stop after game over

    const index = parseInt(e.target.dataset.index);

    if (boardState[index] !== "") return; // already filled

    boardState[index] = currentPlayer;
    e.target.innerHTML = currentPlayer === "X" ? "❌" : "✔️";

    if (checkWin()) {
        statusDiv.innerHTML = `${currentPlayer} wins!`;
        playGame = false;
        return;
    }

    if (checkDraw()) {
        statusDiv.innerHTML = "It's a draw!";
        playGame = false;
        return;
    }

    switchPlayer();
}

function switchPlayer(){

    currentPlayer= currentPlayer === "X" ? "Y" : "X";
    statusDiv.innerHTML = `${currentPlayer}'s turn`;
}

function checkWin(){

    for (let condition of winConditions) {
        const [a,b,c] = condition;
        if (boardState[a] !== "" && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw(){

    return boardState.every(cell => cell !== "");
}