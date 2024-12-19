export default function Status({
  winner,
  draw,
  status,
}: {
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}) {
  return (
    <div className="status">
      {draw ? "Ist draw!" : winner ? "Winner is:" : "Next player is:"}
      {status}
    </div>
  );
}
