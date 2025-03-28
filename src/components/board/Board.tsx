import { useCharacters } from "@/context/CharactersContext";
import { calculateWinner } from "@/utils/calculateWinner";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Status } from "./Status";
import { Square } from "./Square";

import SquareProps from "@/types/SquareProps";

interface BoardProps {
  xIsNext: boolean;
  squares: any;
  onPlay: (nextSquares: Array<SquareProps>) => void;
  jumpTo: (nextMove: number) => void;
  draw: boolean;
}

export const Board = ({ xIsNext, squares, onPlay, jumpTo, draw }: BoardProps) => {
  const { firstCharacter, computerCharacter } = useCharacters();
  const { t } = useTranslation();

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    xIsNext ? (nextSquares[i] = firstCharacter) : (nextSquares[i] = computerCharacter);

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  winner ? (status = winner) : (status = xIsNext ? firstCharacter : computerCharacter);

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
        winner={winner}
        draw={draw}
        status={status}
      />
      {winner || draw ? <Button onClick={() => jumpTo(0)}>{t("startNewGame")}</Button> : null}
    </div>
  );
};
