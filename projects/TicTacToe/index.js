let currentPlayer = "X",
 gameBoard = Array(9).fill(""),
  gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const buttons = document.querySelectorAll(".button"), 
resetBtn = document.getElementById("resetBtn");

function handleClick(e) {
    const i = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].indexOf(e.target.id);
    if (gameBoard[i] === "" && gameActive) {
        gameBoard[i] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (checkWin()) {
            setTimeout(() => alert(`🎉 Player ${currentPlayer} wins!`), 100);
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== "")) {
            setTimeout(() => alert("It's a draw! 🤝"), 100);
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    for (let [a, b, c] of winConditions) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            [a, b, c].forEach(i => buttons[i].style.backgroundColor = "#a4f9a4");
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard.fill(""), gameActive = true, currentPlayer = "X";
    buttons.forEach(b => (b.innerText = "", b.style.backgroundColor = "#fff"));
}

buttons.forEach(b => b.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
