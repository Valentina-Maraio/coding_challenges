import React, { useState } from 'react';
import './tictactoe.css'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== null)) {
      return 'tie';
    }

    return null;
  };

  const winner = checkWinner();

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  };

  return (
    <div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? (
          winner === 'tie' ? (
            'Tie'
          ) : (
            `Winner: ${winner}`
          )
        ) : (
          `Next player: ${currentPlayer}`
        )}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;