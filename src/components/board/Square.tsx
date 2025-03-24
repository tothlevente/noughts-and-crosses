import SquareProps from "@/types/SquareProps";

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
