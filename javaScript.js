let currentSign = 0;
let players = ['X', '0'];
let moves = 9;
let winner = 0;
let check = false;
let gameMatrix = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];


function setPlayer() {
    currentSign = players[Math.floor(players.length * Math.random())];
    document.getElementById("display").textContent = "Start with:" + " " + currentSign;
}

function gameStart(cellId) {
    let cell = document.getElementById(cellId).innerHTML;
    if (cell == "") {
        document.getElementById(cellId).innerHTML = currentSign;
        let line = ~~(cellId / 3);
        let col = cellId % 3;
        gameMatrix[line][col] = currentSign;
        moves--;
        gameWin();
        playerTurn();
        stopGame();
    }
}

function playerTurn() {
    if (currentSign == "X") {
        currentSign = "0";
    } else if (currentSign == "0") {
        currentSign = "X";
    }
}

function gameWin() {
    let i = 0;
    let j = 0;
    for (let j = 0; j < gameMatrix.length; ++j) {
        if (gameMatrix[i][j] == gameMatrix[i + 1][j] && gameMatrix[i + 1][j] == gameMatrix[i + 2][j] && gameMatrix[i][j] != undefined) {
            winner = gameMatrix[i][j];
            winnerPlayer();
        }
    }
    for (let i = 0; i < gameMatrix.length; ++i) {
        if (gameMatrix[i][j] == gameMatrix[i][j + 1] && gameMatrix[i][j + 1] == gameMatrix[i][j + 2] && gameMatrix[i][j] != undefined) {
            winner = gameMatrix[i][j];
            winnerPlayer();
        }
    }
    if (gameMatrix[i][j] == gameMatrix[i + 1][j + 1] && gameMatrix[i + 1][j + 1] == gameMatrix[i + 2][j + 2] && gameMatrix[i][j] != undefined) {
        winner = gameMatrix[i][j];
        winnerPlayer();
    }
    if (gameMatrix[i][j + 2] == gameMatrix[i + 1][j + 1] && gameMatrix[i + 1][j + 1] == gameMatrix[i + 2][j] && gameMatrix[i][j + 2] != undefined) {
        winner = gameMatrix[i][j + 2];
        winnerPlayer();
    }
}

function winnerPlayer() {
    check = true;
    document.getElementById("display").innerHTML = winner + " WON!";
}

function stopGame() {
    let button = document.getElementById('restart');
    if (moves == 0 || check) {
        button.disabled = false;
        disableBoard();
    }
    if (moves == 0 && !check){
      document.getElementById("display").textContent = "Draw!"
    }
}

function disableBoard() {
    let element = document.getElementsByClassName("grid");
    for (let i = 0; i < element.length; ++i) {
        element[i].disabled = true;
    }
}

function restartGame() {
    window.location.reload();
}
