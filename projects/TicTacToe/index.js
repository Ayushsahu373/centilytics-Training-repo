let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
];


const buttons = document.querySelectorAll(".button");
const resetBtn = document.getElementById("resetBtn");

function handleClick(event) {
    const button = event.target;
    const index = parseInt(button.id.replace("one", "0")
                                  .replace("two", "1")
                                  .replace("three", "2")
                                  .replace("four", "3")
                                  .replace("five", "4")
                                  .replace("six", "5")
                                  .replace("seven", "6")
                                  .replace("eight", "7")
                                  .replace("nine", "8"));

    
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        button.innerText = currentPlayer;

        
        if (checkWin()) {
            setTimeout(() => alert(`🎉 Player ${currentPlayer} wins!`), 100);
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== "")) {
            setTimeout(() => alert("It's a draw! 🤝"), 100);
            gameActive = false;
        } else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            highlightWinningCells(condition);
            return true;
        }
    }
    return false;
}

function highlightWinningCells(condition) {
    condition.forEach(index => {
        buttons[index].style.backgroundColor = "#a4f9a4"; 
    });
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";

    buttons.forEach(button => {
        button.innerText = "";
        button.style.backgroundColor = "#fff"; 
    });
}

buttons.forEach(button => button.addEventListener("click", handleClick));

resetBtn.addEventListener("click", resetGame);