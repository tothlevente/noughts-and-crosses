import SquareProps from "./SquareProps";

export default interface BoardProps {
  xIsNext: boolean;
  squares: any;
  onPlay: (nextSquares: Array<SquareProps>) => void;
  jumpTo: (nextMove: number) => void;
  draw: boolean;
}
