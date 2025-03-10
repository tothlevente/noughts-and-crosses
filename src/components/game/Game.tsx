import calculateWinner from "@/controllers/CalculateWinner";
import BoardProps from "@/interfaces/BoardProps";
import Status from "./Status";
import Square from "./Square";

import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export default function Game({
  xIsNext,
  squares,
  onPlay,
  jumpTo,
  draw,
  firstCharacter,
  secondCharacter,
}: BoardProps) {
  const { t } = useTranslation();

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    xIsNext
      ? (nextSquares[i] = firstCharacter)
      : (nextSquares[i] = secondCharacter);

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  winner
    ? (status = winner)
    : (status = xIsNext ? firstCharacter : secondCharacter);

  return (
    <div className="game-content board">
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
      <Status
        firstCharacter={firstCharacter}
        secondCharacter={secondCharacter}
        winner={winner}
        draw={draw}
        status={status}
      />
      {winner || draw ? (
        <Button onClick={() => jumpTo(0)}>{t("startNewGame")}</Button>
      ) : null}
    </div>
  );
}
