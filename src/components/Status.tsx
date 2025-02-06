export default function Status({
  firstCharacter,
  secondCharacter,
  winner,
  draw,
  status,
}: {
  firstCharacter: JSX.Element;
  secondCharacter: JSX.Element;
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}) {
  if (draw) {
    return (
      <div className="status">
        <b>Ist draw!</b>
        <div className="draw-status">
          {firstCharacter}
          {secondCharacter}
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
