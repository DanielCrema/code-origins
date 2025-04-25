const ids = document.querySelectorAll(".squareItem");

const containerTurns = document.querySelector(".containerTurns");
const nowPlaying = document.querySelector(".nowPlaying");

const containerWinner = document.querySelector(".containerWinner");
const endGameStatement = document.querySelector(".endGameStatement");
const winner = document.querySelector(".winner");
const winsStatement = document.querySelector(".winsStatement");

const p1ScoreHtml = document.querySelector("#p1Score");
const p2ScoreHtml = document.querySelector("#p2Score");
const drawScoreHtml = document.querySelector("#drawScore");

let p1Score = 0;
let p2Score = 0;
let drawScore = 0;
p1ScoreHtml.innerText = p1Score;
p2ScoreHtml.innerText = p2Score;
drawScoreHtml.innerText = drawScore;

const restartButton = document.querySelector(".restart");

const operatorCross = "X";
const operatorCircle = "O";

let player1Turn = true;
let player2Turn = false;

let player1Wins = false;
let player2Wins = false;
let draw = false;
let freeze = false;

let lastWin = "Player 1";

ids.forEach((id) => {
  id.addEventListener("click", () => {
    if (
      id.classList.contains("clicked") ||
      player1Wins ||
      player2Wins ||
      draw || freeze
    ) {
      return;
    }

    if (player1Turn) {
      id.innerHTML = operatorCross;
      id.classList.add("cross");
      player1Turn = false;
      player2Turn = true;
      nowPlaying.classList.add("player2Turn");
      nowPlaying.innerText = "Player 2";
    } else if (player2Turn) {
      id.innerHTML = operatorCircle;
      id.classList.add("circle");
      player1Turn = true;
      player2Turn = false;
      nowPlaying.classList.remove("player2Turn");
      nowPlaying.innerText = "Player 1";
    }

    id.classList.add("clicked");

    // compute result

    const board = Array.from(ids).map((id) => id);
    const boardContent = Array.from(ids).map((id) => id.innerHTML)

    function checkWinner() {
      const winningCombination = [
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Main diagonal
        [2, 4, 6], // Secondary diagonal
      ];

      for (const combination of winningCombination) {
        const [a, b, c] = combination;

        if (
          boardContent[a] === operatorCircle &&
          boardContent[b] === operatorCircle &&
          boardContent[c] === operatorCircle
        ) {
          player2Wins = true;
          return;
        }

        if (
          boardContent[a] === operatorCross &&
          boardContent[b] === operatorCross &&
          boardContent[c] === operatorCross
        ) {
          player1Wins = true;
          return;
        }
      }

    };
    checkWinner();
    if (
      board.filter((item) => item.classList.contains("clicked")).length === board.length
    ) {
      draw = true;
    }
    // display result

    if (player1Wins) {
      containerTurns.style.display = "none";
      containerWinner.style.display = "flex";

      winner.innerText = "Player 1";
      endGameStatement.classList.add("p1Wins");
      winsStatement.innerText = "Wins";

      p1Score = p1Score + 1;
      p1ScoreHtml.innerText = p1Score;

      player1Turn = true;
      player2Turn = false;
      lastWin = "Player 1";
    } else if (player2Wins) {
      containerTurns.style.display = "none";
      containerWinner.style.display = "flex";

      winner.innerText = "Player 2";
      endGameStatement.classList.add("p2Wins");
      winsStatement.innerText = "Wins";

      p2Score = p2Score + 1;
      p2ScoreHtml.innerText = p2Score;

      player2Turn = true;
      player1Turn = false;
      lastWin = "Player 2";
    } else if (draw) {
      containerTurns.style.display = "none";
      containerWinner.style.display = "flex";

      winner.innerText = "Draw";
      endGameStatement.classList.add("drawResult");
      winsStatement.innerText = "Game";
      winsStatement.style.fontSize = "20px";
      winsStatement.style.fontWeight = "600";

      drawScore = drawScore + 1;
      drawScoreHtml.innerText = drawScore;

      if (lastWin === "Player 1") {
        player2Turn = true;
        player1Turn = false;
      } else if (lastWin === "Player 2") {
        player1Turn = true;
        player2Turn = false;
      }
    }
  });
});

// restart button setup

restartButton.addEventListener("click", () => {
  ids.forEach((id) => {
    if (id.classList.contains("clicked")) {
      id.classList.remove("clicked");
    }

    if (id.classList.contains("cross")) {
      id.classList.remove("cross");
    }

    if (id.classList.contains("circle")) {
      id.classList.remove("circle");
    }

    id.innerText = null;
  });

  if (endGameStatement.classList.contains("p1Wins")) {
    endGameStatement.classList.remove("p1Wins");
  }

  if (endGameStatement.classList.contains("p2Wins")) {
    endGameStatement.classList.remove("p2Wins");
  }

  if (endGameStatement.classList.contains("drawResult")) {
    endGameStatement.classList.remove("drawResult");
  }

  if (player1Wins && nowPlaying.classList.contains("player2Turn")) {
    nowPlaying.classList.remove("player2Turn");
    nowPlaying.innerText = "Player 1";
  } else if (player2Wins) {
    nowPlaying.classList.add("player2Turn");
    nowPlaying.innerText = "Player 2";
  }

  player1Wins = false;
  containerTurns.style.display = "flex";
  containerWinner.style.display = "none";

  if (!machineActive) {
    player2Wins = false;
    draw = false;
  } else if (player2Wins) {
    freeze = true;
    computerMove()
    player2Wins = false;
  } else if (draw) {
    freeze = true;
    computerMove()
    draw = false;   
  }
});

// machine player 2 setup

const toggleMachineButton = document.querySelector(".toggleMachine");
let machineActive = false;

toggleMachineButton.addEventListener("click", () => {
  toggleMachineButton.classList.toggle("clickedButton");
  setTimeout(() => {
    toggleMachineButton.classList.toggle("clickedButton");
  }, 200);
  if (!machineActive) {
    toggleMachineButton.classList.add("machineON");
    toggleMachineButton.innerText = "ON";
    machineActive = true;
  } else {
    toggleMachineButton.classList.remove("machineON");
    toggleMachineButton.innerText = "OFF";
    machineActive = false;
  }
});

/*
 
  ## Lógica JavaScript Simplificada
 
  - Suponhamos que o tabuleiro seja um array de 9 elementos, onde os índices representam as seguintes posições:
 
   0 | 1 | 2 
  ---------- 
   3 | 4 | 5 
  ---------- 
   6 | 7 | 8 
 
  - Para verificar se o jogador (X ou O) tem duas das três células em uma combinação vencedora e a terceira célula está vazia, podemos fazer o seguinte:
 
  1. Verificar se a máquina pode ganhar na próxima jogada
  2. Bloquear o jogador se ele estiver prestes a ganhar
  3. Ocupar o centro, se disponível
  4. Ocupar um canto, se disponível
  5. Ocupar qualquer outra célula vazia
 
*/

// Função para verificar se há uma jogada vencedora disponível
function checkWinningMove(board, player) {
  // Define as combinações vencedoras possíveis em um tabuleiro de Jogo da Velha
  // Cada subarray contém os índices que formam uma linha, coluna ou diagonal

  const winningCombination = [
    [0, 1, 2], // Primeira linha
    [3, 4, 5], // Segunda linha
    [6, 7, 8], // Terceira linha

    [0, 3, 6], // Primeira coluna
    [1, 4, 7], // Segunda coluna
    [2, 5, 8], // Terceira coluna

    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundária
  ];

  // Itera sobre cada combinação vencedora
  for (const [a, b, c] of winningCombination) {
    // Verifica se o jogador (X ou O) tem duas das três células em uma combinação vencedora
    // e a terceira célula está vazia. Se sim, retorna o índice da célula vazia.

    // Primeiro caso: as células 'a' e 'b' contêm o símbolo do jogador e 'c' está vazio
    if (board[a] === player && board[b] === player && board[c] === "") {
      return c;
    }
    // Segundo caso: as células 'a' e 'c' contêm o símbolo do jogador e 'b' está vazio
    if (board[a] === player && board[c] === player && board[b] === "") {
      return b;
    }
    // Terceiro caso: as células 'b' e 'c' contêm o símbolo do jogador e 'a' está vazio
    if (board[b] === player && board[c] === player && board[a] === "") {
      return a;
    }
  }
  // Se nenhuma jogada vencedora for encontrada, retorna null
  return null;
}

// Função para fazer a jogada do computador
async function computerMove() {
  if (freeze === true) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    freeze = false;
  }
  // Obter o estado atual do tabuleiro, transformando a NodeList em um array e pegando o conteúdo interno de cada elemento
  const board = Array.from(ids).map((id) => id.innerHTML);
  function checkDraw() {
    const boardItems = Array.from(ids).map((id) => id);
    if (boardItems.filter((item) => item.classList.contains("clicked")).length === board.length) {

      containerTurns.style.display = "none";
      containerWinner.style.display = "flex";

      winner.innerText = "Draw";
      endGameStatement.classList.add("drawResult");
      winsStatement.innerText = "Game";
      winsStatement.style.fontSize = "20px";
      winsStatement.style.fontWeight = "600";

      drawScore = drawScore + 1;
      drawScoreHtml.innerText = drawScore;

      if (lastWin === "Player 1") {
        player2Turn = true;
        player1Turn = false;
      } else if (lastWin === "Player 2") {
        player1Turn = true;
        player2Turn = false;
      }

      return;
    } else {
      updateTurn("Player 1")  
    }
  }

  // 1. Verificar se a máquina pode ganhar na próxima jogada
  // A função `checkWinningMove` (que você precisará implementar) deve retornar o índice da jogada vencedora ou null
  const winningMove = checkWinningMove(board, operatorCircle);
  if (winningMove !== null) {
    // Se uma jogada vencedora for encontrada, faça essa jogada
    ids[winningMove].innerHTML = operatorCircle;
    ids[winningMove].classList.add("circle", "clicked");
    // Computar a vitória
    containerTurns.style.display = "none";
    containerWinner.style.display = "flex";

    winner.innerText = "Computer";
    endGameStatement.classList.add("p2Wins");
    winsStatement.innerText = "Wins";

    p2Score = p2Score + 1;
    p2ScoreHtml.innerText = p2Score;

    player2Wins = true;
    player2Turn = true;
    player1Turn = false;
    lastWin = "Player 2";
    return;
  }

  // 2. Bloquear o jogador se ele estiver prestes a ganhar
  const blockingMove = checkWinningMove(board, operatorCross);
  if (blockingMove !== null) {
    // Se uma jogada de bloqueio for encontrada, faça essa jogada
    ids[blockingMove].innerHTML = operatorCircle;
    ids[blockingMove].classList.add("circle", "clicked");
    // Atualizar o turno para o Player 1 e sair da função
    return checkDraw();
  }

  // 3. Ocupar o centro, se disponível
  // O índice 4 representa o centro no tabuleiro 3x3
  if (board[4] === "") {
    ids[4].innerHTML = operatorCircle;
    ids[4].classList.add("circle", "clicked");
    // Atualizar o turno para o Player 1 e sair da função
    return checkDraw();
  }

  // 4. Ocupar um canto, se disponível
  // Os índices 0, 2, 6 e 8 representam os cantos no tabuleiro 3x3
  const corners = [0, 2, 6, 8];
  for (const corner of corners) {
    if (board[corner] === "") {
      ids[corner].innerHTML = operatorCircle;
      ids[corner].classList.add("circle", "clicked");
      // Atualizar o turno para o Player 1 e sair da função
      return checkDraw();
    }
  }

  // 5. Ocupar qualquer outra célula vazia
  // Filtrar as células que ainda não foram clicadas
  const emptySquares = Array.from(ids).filter(
    (id) => !id.classList.contains("clicked")
  );
  // Se não houver células vazias, sair da função
  if (emptySquares.length === 0) return;

  // Escolher uma célula aleatoriamente entre as células vazias
  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  const chosenSquare = emptySquares[randomIndex];

  // Fazer a jogada
  chosenSquare.innerHTML = operatorCircle;
  chosenSquare.classList.add("circle", "clicked");

  // Atualizar o turno para o Player 1
  return checkDraw();
}

// Função para atualizar o turno do jogador
function updateTurn(nextPlayer) {
  // Atualizar as variáveis e o DOM para refletir o próximo jogador
  if (nextPlayer === "Player 1") {
    player1Turn = true;
    player2Turn = false;
    nowPlaying.classList.remove("player2Turn");
    nowPlaying.innerText = "Player 1";
  } else {
    player1Turn = false;
    player2Turn = true;
    nowPlaying.classList.add("player2Turn");
    nowPlaying.innerText = "Player 2";
  }
}

// Adicionar um ouvinte de evento para cada célula do tabuleiro
ids.forEach((id) => {
  id.addEventListener("click", () => {
    // Se a máquina estiver ativa e for a vez do Player 2, chamar a função `computerMove` após um pequeno atraso
    if (machineActive && player2Turn && !player2Wins) {
      setTimeout(computerMove, 500);
    }
  });
})