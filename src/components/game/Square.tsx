import SquareProps from "@/types/SquareProps";

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
