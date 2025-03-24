import SquareProps from "../types/SquareProps";

export const handlePlay = (
  nextSquares: Array<SquareProps>,
  history: Array<Array<SquareProps>>,
  currentMove: number,
  setHistory: (history: Array<Array<SquareProps>>) => void,
  setCurrentMove: (move: number) => void
) => {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
};
