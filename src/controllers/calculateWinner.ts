/**
 * Determines the winner of a noughts and crosses (tic-tac-toe) game.
 *
 * @param {Array<number>} squares - An array representing the game board, where each element is either:
 *  - 0: representing an empty square,
 *  - 1: representing a square occupied by player 1,
 *  - 2: representing a square occupied by player 2.
 * @returns {number | null} - The player number (1 or 2) if there is a winner, or null if there is no winner.
 */
export default function calculateWinner(squares: Array<number>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}
