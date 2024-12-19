import CircleDot from "./icons/circle-dot";
import CircleX from "./icons/circle-x";

export default function Status({
  winner,
  draw,
  status,
}: {
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}) {
  if (draw) {
    return (
      <div className="status">
        <b>Ist draw!</b>
        <div className="draw-status">
          <CircleX />
          <CircleDot />
        </div>
      </div>
    );
  } else {
    return (
      <div className="status">
        {winner ? <b>Winner is:</b> : <p>Next player is:</p>}
        {status}
      </div>
    );
  }
}
